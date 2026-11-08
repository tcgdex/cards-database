import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Dark Forretress",
		'fr-fr': "Foretress obscur",
		'de-de': "Dunkles Forstellka"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		205,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Pineco",
		'fr-fr': "Pomdepik"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Armor Up",
				'fr-fr': "Blindage",
				'de-de': "Armor Up"
			},
			effect: {
				'en-us': "Until the end of your next turn, if Dark Forretress would be Knocked Out by damage from an attack, flip a coin. If heads, Dark Forretress is not Knocked Out and its remaining HP become 10 instead.",
				'fr-fr': "Jusqu'à la fin de votre prochain tour, si Foretress obscur doit être mis K.O. par les dégâts d'une attaque, lancez une pièce. Si c'est face, Foretress obscur n'est pas mis K.O. et ses points de vie deviennent 10.",
				'de-de': "Until the end of your next turn, if Dark Forretress would be Knocked Out by damage from an attack, flip a coin. If heads, Dark Forretress is not Knocked Out and its remaining HP become 10 instead."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Explosion",
				'fr-fr': "Explosion",
				'de-de': "Explosion"
			},
			effect: {
				'en-us': "Dark Forretress does 60 damage to itself.",
				'fr-fr': "Foretress obscur s'inflige 60 dégâts.",
				'de-de': "Dark Forretress does 60 damage to itself."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It stays motionless in trees, driving away with flying armored shards from its hard shell any who come close.",
		'fr-fr': "Il reste immobile dans les arbres et chasse les intrus en leur lançant des piquants blindés."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274687,
				tcgplayer: 84598
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274687,
				tcgplayer: 84598
			}
		}
	]
}

export default card
