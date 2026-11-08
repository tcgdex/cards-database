import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Torterra",
		'fr-fr': "Torterra",
		'de-de': "Chelterrar"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [389],

	hp: 140,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Grotle",
		'fr-fr': "Boskara"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Green Blast",
				'fr-fr': "Explosion verte",
				'de-de': "Green Blast"
			},
			effect: {
				'en-us': "Does 40 damage plus 10 more damage for each Grass Energy attached to all of your Pokémon.",
				'fr-fr': "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie Grass attachée à tous vos Pokémon.",
				'de-de': "Does 40 damage plus 10 more damage for each  Energy attached to all of your Pokémon."
			},
			damage: "40+",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Soothing Scent",
				'fr-fr': "Senteur apaisante",
				'de-de': "Soothing Scent"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "The Defending Pokémon is now Asleep."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Some Pokémon are born on a TORTERRA's back and spend their entire life there."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 89986,
				cardmarket: 278460
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278460,
				tcgplayer: 89986
			}
		}
	],

}

export default card
