import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Mienshao",
		fr: "Shaofouine",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		620,
	],
	hp: 90,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Mienfoo",
		fr: "Kungfouine",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Feint",
				fr: "Ruse",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
			],
			name: {
				en: "High Jump Kick",
				fr: "Pied Voltige",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
