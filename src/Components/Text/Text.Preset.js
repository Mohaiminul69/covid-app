import { typography } from "../../Theme/Typography";
import { colors } from "../../Theme/Colors";

const BASE = {
  fontFamily: typography.primary,
  fontSize: 16,
  color: colors.black,
};

const BASE_BOLD = {
  fontFamily: typography.primaryBold,
  fontSize: 16,
  color: colors.black,
};

const THIN = {
  fontFamily: typography.primaryThin,
  color: colors.black,
};

export const presets = {
  default: BASE,
  thin: THIN,
  h1: {
    ...BASE_BOLD,
    fontSize: 30,
  },
  h2: {
    ...BASE_BOLD,
    fontSize: 28,
  },
  h3: {
    ...BASE,
    fontSize: 20,
  },
  h4: {
    ...BASE,
    fontSize: 16,
  },
  small: {
    ...THIN,
    fontSize: 14,
  },
};
