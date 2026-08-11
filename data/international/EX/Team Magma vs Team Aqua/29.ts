import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Manectric",
		'fr-fr': "Elecsprint de Team Aqua",
		'de-de': "Team Aquas Voltenso"
	},

	illustrator: "K. Utsunomiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [310],

	hp: 80,

	types: [
		"Lightning"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Beam",
				'fr-fr': "Aqua-laser",
				'de-de': "Aqua Beam"
			},
			effect: {
				'en-us': "If the Defending Pokémon has Team Magma in its name, the Defending Pokémon is now Confused.",
				'fr-fr': "Si le nom du Pokémon Défenseur comporte Team Magma, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "If the Defending Pokémon has Team Magma in its name, the Defending Pokémon is now Confused."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Chaos Crush",
				'fr-fr': "Écrasement chaotique",
				'de-de': "Chaos Crush"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Confused, discard an Energy card attached to the Defending Pokémon.",
				'fr-fr': "Si le Pokémon Défenseur est Confus, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				'de-de': "If the Defending Pokémon is Confused, discard an Energy card attached to the Defending Pokémon."
			},
			damage: 50,

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
			type: "Metal",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275806,
				tcgplayer: 89791
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275806,
				tcgplayer: 89791
			}
		},
	],

}

export default card
