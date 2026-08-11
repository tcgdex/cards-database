import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Electrike",
		'fr-fr': "Dynavolt de Team Aqua",
		'de-de': "Team Aquas Frizelbliz"
	},

	illustrator: "M. Akiyama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [309],

	hp: 50,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Random Spark",
				'fr-fr': "Étincelle surprise",
				'de-de': "Random Spark"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Plasma",
				'fr-fr': "Plasma",
				'de-de': "Plasma"
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your discard pile for a Lightning Energy card and attach it to Team Aqua's Electrike.",
				'fr-fr': "Lancez une pièce. Si c'est face, cherchez une carte Énergie  dans votre pile de défausse et attachez-la à Dynavolt de Team Aqua.",
				'de-de': "Flip a coin. If heads, search your discard pile for a  Energy card and attach it to Team Aqua's Electrike."
			},
			damage: 10,

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
				cardmarket: 275804,
				tcgplayer: 89785
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275804,
				tcgplayer: 89785
			}
		},
		{
			type: "normal",
			stamp: ['chris-fulop'],
			thirdParty: {
				tcgplayer: 477444
			}
		},
	],

}

export default card
