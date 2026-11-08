import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Umbreon",
		'fr-fr': "Noctali",
	},

	illustrator: "kawayoo",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		197,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Mach Claw",
				'fr-fr': "Instagriffe",
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "When exposed to the moon's aura, the rings on its body glow faintly and it's filled with a mysterious power.",
	},

	thirdParty: {
		cardmarket: 289816
	}
}

export default card
