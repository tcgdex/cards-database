import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Mary's Impulse",
		fr: "Impulsion de Lula",
		de: "Mary's Impulse*"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce jusqu'à obtenir pile. Pour chaque face, piochez 2 cartes.",
		de: "Flip a coin until you get tails. For each heads, draw 2 cards.",
	},

	thirdParty: {
		cardmarket: 275017,
		tcgplayer: 87242
	},

	variants:[
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
