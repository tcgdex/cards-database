import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Sunflora",
		'fr-fr': "Heliatronc",
		'de-de': "Sonnflora"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		192,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Sunkern",
		'fr-fr': "Tournegin"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Dazzle Dance",
				'fr-fr': "Danse éblouissante",
				'de-de': "Dazzle Dance"
			},
			effect: {
				'en-us': "Each Defending Pokémon is now Confused.",
				'fr-fr': "Chaque Pokémon Défenseur est maintenant Confus.",
				'de-de': "Each Defending Pokémon is now Confused."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Green Blast",
				'fr-fr': "Explosion verte",
				'de-de': "Green Blast"
			},
			effect: {
				'en-us': "Does 20 damage plus 10 more damage for each Grass Energy attached to all of your Pokémon.",
				'fr-fr': "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à tous vos Pokémon.",
				'de-de': "Does 20 damage plus 10 more damage for each  Energy attached to all of your Pokémon."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89614,
				cardmarket: 276662
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 89614,
				cardmarket: 276662
			},
		}
	],
}

export default card
