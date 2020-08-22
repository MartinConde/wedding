exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /flickity-fade/,
              use: loaders.null(),
            },
            {
                test: /leaflet/,
                use: loaders.null(),
              },
              {
                test: /canvas-confetti/,
                use: loaders.null(),
              },
          ],
        },
      })
    }
  }