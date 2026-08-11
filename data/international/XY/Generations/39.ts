import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Dugtrio",
		'fr-fr': "Triopikeur",
	},

	illustrator: "Toyste Beach",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		51,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Diglett",
		'fr-fr': "Taupiqueur",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Earthquake",
				'fr-fr': "Séisme",
			},
			effect: {
				'en-us': "This attack does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 10 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rock Tumble",
				'fr-fr': "Roule-Pierre",
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "In battle, it digs through the ground and strikes the unsuspecting foe from an unexpected direction.",
	},

	thirdParty: {
		cardmarket: 288477,
		tcgplayer: 113697
	}
}

export default card
