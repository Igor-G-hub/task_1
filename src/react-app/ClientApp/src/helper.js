export const isNullOrWhiteSpace = (example) => {
  return (
    example === null || example == "\t" || example === " " || example === ""
  );
};
