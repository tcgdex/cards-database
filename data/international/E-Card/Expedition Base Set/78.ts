import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Gloom",
		'fr-fr': "Ortide",
		'de-de': "Duflor"
	},

	illustrator: "Yuichi Sawayama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [44],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Oddish",
		'fr-fr': "Mystherbe"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch'herbe",
				'de-de': "Rasierblatt"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Foul Odor",
				'fr-fr': "Odeur fétide",
				'de-de': "Fäulnisgeruch"
			},
			effect: {
				'en-us': "Both the Defending Pokémon and Gloom are now Confused (after doing damage).",
				'fr-fr': "Le Pokémon Défenseur et Ordide sont maintenant Confus (après avoir infligé les dégâts).",
				'de-de': "Sowohl das Verteidigende Pokémon als auch Duflor sind jetzt verwirrt (nachdem der Schaden zugefügt wurde)."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85781,
				cardmarket: 274953
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85781,
				cardmarket: 274953
			},
		},
	],
}

export default card
