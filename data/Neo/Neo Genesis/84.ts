import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Ecogym",
		fr: "Ecostade",
		de: "Ecogym*"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez cette carte si une autre carte Stade arrive en jeu.",
		de: "Whenever an attack, Pokémon Power, or Trainer card discards another player's non- Energy card from a Pokémon, return that Energy card to its owner's hand. (Energy cards that are discarded when that Pokémon is Knocked Out don't count.)",
	},

	thirdParty: {
		cardmarket: 274484,
		tcgplayer: 85066
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
