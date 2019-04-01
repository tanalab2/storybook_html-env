import { configure } from '@storybook/html';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context("../stories", true, /\.story\.js$/));
}

configure(loadStories, module);
