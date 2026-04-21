import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Vanillish",
		fr: "Sorboul",
		es: "Vanillish",
		it: "Vanillish",
		pt: "Vanillish",
		de: "Gelatroppo"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		583,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Vanillite",
		fr: "Sorbébé"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Triple Spin",
				fr: "Triple Tour"
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frost Breath",
				fr: "SouffleGlacé"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280362,
		tcgplayer: 90265
	}
}

export default card
