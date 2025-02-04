export const formatLabel = (label: string) =>
  label.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
