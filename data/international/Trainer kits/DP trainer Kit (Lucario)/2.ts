import { Card } from 'models/database/card'
import Set from '../DP trainer Kit (Lucario)'

const card: Card = {
	dexId: [75],
	set: Set,

	name: {
		'en-us': "Graveler",
		'fr-fr': "Gravalanch"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",

	hp: 90,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Geodude",
		'fr-fr': "Racaillou"
	},

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless"
			],
			name: {
				'en-us': "Rock Cannon",
				'fr-fr': "Canon à pierres"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 30 dégâts multipliés par le nombre de faces."
			},
			damage: "30×"
		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless"
			],
			name: {
				'en-us': "Rock Slide",
				'fr-fr': "Éboulement"
			},
			effect: {
				'en-us': "Does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à 2 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},
			damage: "40"
		}
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	description: {
		'en-us': "GRAVELER make their homes on sheer cliff faces by gouging out numerous horizontal holes."
	},

	retreat: 3,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278012,
				tcgplayer: 85893
			}
		},
	],

}

export default card
