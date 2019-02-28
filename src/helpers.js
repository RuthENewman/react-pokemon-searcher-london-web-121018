

export const reduceStats = (stats) =>
  stats.reduce((acc, curr) => ({
    ...acc,
    [curr.name]: curr.value
  }),
  {})

export const transformPokemon = pokemon => ({
  ...pokemon,
  stats: reduceStats(pokemon.stats)
})
