import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Altaria",
		'fr-fr': "Altaria",
	},
	illustrator: "HiRON",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		334,
	],
	hp: 70,
	types: [
		"Dragon",
	],
	evolveFrom: {
		'en-us': "Swablu",
		'fr-fr': "Swablu",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Fight Song",
				'fr-fr': "Hymne au Combat",
			},
			effect: {
				'en-us': "Your Dragon Pokémon's attacks do 20 more damage to the Active Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Les attaques de vos Pokémon Dragon infligent 20 dégâts supplémentaires aux Pokémon Actifs (avant application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Glide",
				'fr-fr': "Glissement",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,




	description: {
		'en-us': "If it bonds with a person, it will gently envelop the friend with its soft wings, then hum.",
	},
}

export default card
