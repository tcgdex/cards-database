import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Darumaka",
		fr: "Darumarond",
		es: "Darumaka",
		it: "Darumaka",
		pt: "Darumaka",
		de: "Flampion"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		554,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Combustion",
				fr: "Fournaise",
				de: "Glühen"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "When its internal fire is burning, it cannot calm down and it runs around. When the fire diminishes, it falls asleep.",
		de: "Solang das Feuer in ihm brennt, rennt es rastlos durch die Gegend. Geht ihm das Brennmaterial aus, wird es schläfrig."
	},

	thirdParty: {
		cardmarket: 279985,
		tcgplayer: 84719
	}
}

export default card
