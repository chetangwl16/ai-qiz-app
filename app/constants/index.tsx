/**
 * Name: API_DATA
 * Desc: OpenAI chat completions request config
 */
export const API_DATA = {
  requestUrl: "https://api.openai.com/v1/chat/completions",
  method: "POST",
  contentType: "application/json",
  authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
  gptModel: "gpt-4o-mini",
};

/**
 * Name: DEFAULT_DROPDOWN_INDEX
 * Desc: -1 means no header dropdown is open
 */
export const DEFAULT_DROPDOWN_INDEX = -1;

/**
 * Name: QUESTION_LIMIT
 * Desc: Number of questions to generate per quiz
 */
export const QUESTION_LIMIT = 10;

/**
 * Name: IMAGE_PATHS
 * Desc: Icon paths served from /public
 */
export const IMAGE_PATHS = {
  checkIcon: "/checkMark.svg",
  circleIcon: "/blankCircle.svg",
  dropdownIcon: "/dropdownIcon.svg",
  errorIcon: "/errorMark.svg",
};
