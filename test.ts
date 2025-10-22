import TCGPlayer from './server/src/libs/providers/tcgplayer/TCGPlayer'

const tcgplayer = new TCGPlayer()

const res = await tcgplayer.category.listConditions()

console.log(res)
