import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Cubone",
		fr: "Osselait",
		de: "Tragosso"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		104,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Beat",
				fr: "Bataille",
				de: "Beat"
			},

			damage: 10,

		},
		{
			name: {
				en: "Rage",
				fr: "Frénésie",
				de: "Rage"
			},

			effect: {
				en: "Does 10 damage plus 10 more damage for each damage counter on Cubone.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Osselait.",
				de: "Does 10 damage plus 10 more damage for each damage counter on Cubone."
			},

			damage: "10+",
			cost: ["Colorless", "Colorless"]
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276823,
		tcgplayer: 84533
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

