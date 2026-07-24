import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Darkness Energy",
		fr: "Impulsion de Lula",
		de: "Mary's Impulse*"
	},

	illustrator: "Milky Isobe",
	rarity: "Rare",
	category: "Energy",
	set: Set,

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Flip a coin until you get tails. For each heads, draw 2 cards.",
		fr: "Lancez une pièce jusqu'à obtenir pile. Pour chaque face, piochez 2 cartes.",
		de: "Flip a coin until you get tails. For each heads, draw 2 cards.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87242,
				cardmarket: 275017
			},
		},
		{
			type: "reverse",
		}
	],
	types: [
		"Darkness"
	],
}

export default card
