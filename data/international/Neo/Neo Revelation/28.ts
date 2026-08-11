import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Flaaffy",
		'fr-fr': "Lainergie",
		'de-de': "Waaty"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		180,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Mareep",
		'fr-fr': "Wattouat"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Electric Punch",
				'fr-fr': "Poing électrique",
				'de-de': "Electric Punch"
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
				'en-us': "Tail Shock",
				'fr-fr': "Élektri-keu",
				'de-de': "Tail Shock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à chaque Pokémon du Banc de votre adversaire. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)",
				'de-de': "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
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
	retreat: 1,


	description: {
		'en-us': "Its fluffy fleece easily stores electricity. Its rubbery hide keeps it from being electrocuted.",
		'fr-fr': "Son épaisse toison stocke l'électricité. Sa peau caoutchouteuse le sauve de l'électrocution."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274614,
				tcgplayer: 85473
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274614,
				tcgplayer: 85473
			}
		}
	]
}

export default card

