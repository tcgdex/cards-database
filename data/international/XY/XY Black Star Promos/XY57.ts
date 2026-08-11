import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Fearow",
		'fr-fr': "Rapasdepic",
	},

	illustrator: "match",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		22,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Spearow",
		'fr-fr': "Piafabec",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Repeating Drill",
				'fr-fr': "Multivrille"
			},
			effect: {
				'en-us': "Flip 5 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 5 pièces. Cette attaque inflige 20 dégâts multiplié par le nombre de côtés face."
			},
			damage: "20×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Nosedive",
				'fr-fr': "Descente en Piqué"
			},
			effect: {
				'en-us': "This Pokémon does 20 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 20 dégâts."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has the stamina to fly all day on its broad wings. It fights by using its sharp beak.",
	},

	thirdParty: {
		cardmarket: 289782
	}
}

export default card
