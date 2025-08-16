import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Pansear",
		fr: "Flamajou",
		es: "Pansear",
		it: "Pansear",
		pt: "Pansear",
		de: "Grillmak"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		513,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flare",
				fr: "Flamboiement",
				es: "Llama",
				it: "Fiammata",
				pt: "Chama",
				de: "Flackern"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 299428,
		tcgplayer: 138500
	}
}

export default card
