import { motion } from "framer-motion";

interface CircularProgressBarProps {
  value: number; // percentage value (0-100)
  size?: number | string; // overall SVG size, default is 120. Can be a number or e.g. "100%"
  strokeWidth?: number; // circle stroke thickness, default is 10
  gapDegrees?: number; // degrees of gap at the top, default is 20
}

export default function CircularProgressBar({
  value,
  size = 120,
  strokeWidth = 10,
  gapDegrees = 20,
}: CircularProgressBarProps) {
  // Use a fixed base size for internal calculations.
  const baseSize = 120;
  // When a number is passed, use it (and scale the calculations accordingly).
  // When a string is passed (i.e. dynamic sizing via CSS classes), use the baseSize internally.

  const radius = (baseSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const gapLength = (gapDegrees / 360) * circumference;
  const availableLength = circumference - gapLength;
  const progressLength = (value / 100) * availableLength;
  const dashOffset = availableLength - progressLength;
  const dashArray = `${availableLength} ${circumference}`;

  return (
    <svg
      width={typeof size === "number" ? size : size}
      height={typeof size === "number" ? size : size}
      // Use a viewBox for internal calculations so it scales properly when using dynamic sizes
      viewBox={`0 0 ${baseSize} ${baseSize}`}
    >
      {/* Background circle with gap */}
      <circle
        cx={baseSize / 2}
        cy={baseSize / 2}
        r={radius}
        stroke="#e5e7eb"
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={dashArray}
        transform={`rotate(-80 ${baseSize / 2} ${baseSize / 2})`}
      />
      {/* Animated progress circle */}
      <motion.circle
        cx={baseSize / 2}
        cy={baseSize / 2}
        r={radius}
        stroke="#3b82f6"
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={dashArray}
        initial={{ strokeDashoffset: availableLength }}
        animate={{ strokeDashoffset: dashOffset }}
        transition={{ duration: 1, ease: "easeOut" }}
        transform={`rotate(-80 ${baseSize / 2} ${baseSize / 2})`}
      />
      {/* Centered text */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="20"
      >
        {value}%
      </text>
    </svg>
  );
}
