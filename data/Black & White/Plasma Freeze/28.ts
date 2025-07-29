import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Vanillish",
		fr: "Sorboul",
		es: "Vanillish",
		it: "Vanillish",
		pt: "Vanillish",
		de: "Gelatroppo"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		583,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Vanillite",
		fr: "Sorbébé",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Surefire Spin",
				fr: "Tourbillon Glacé",
			},
			effect: {
				en: "Flip 2 coins. If both of them are heads, this attack does 40 more damage.",
				fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: 20,

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
		cardmarket: 280906
	}
}

export default card
