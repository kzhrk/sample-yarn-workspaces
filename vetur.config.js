module.exports = {
  settings: {
    'vetur.useWorkspaceDependencies': true,
    'vetur.experimental.templateInterpolationService': true,
  },
  projects: [
    {
      root: './packages/nuxt',
      tsconfig: './tsconfig.json',
    },
    {
      root: './packages/ui',
      tsconfig: './tsconfig.json',
    },
  ],
}