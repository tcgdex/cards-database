import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Gyarados G",
		'fr-fr': "Leviator ",
		'de-de': "Garados G"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [130],

	hp: 110,

	types: [
		"Water"
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wriggle",
				'fr-fr': "Se tortiller",
				'de-de': "Wriggle"
			},
			effect: {
				'en-us': "Flip a coin for each of your opponent's Pokémon. If that coin flip is heads, this attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Lancez une pièce pour chaque Pokémon de votre adversaire. Si vous obtenez une face, cette attaque inflige 30 dégâts à ce Pokémon. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Flip a coin for each of your opponent's Pokémon. If that coin flip is heads, this attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dwindling Wave",
				'fr-fr': "Vague diminutrice",
				'de-de': "Dwindling Wave"
			},
			effect: {
				'en-us': "Does 100 damage minus 10 damage for each damage counter on Gyarados G.",
				'fr-fr': "Inflige 100 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Leviator .",
				'de-de': "Does 100 damage minus 10 damage for each damage counter on Gyarados G."
			},
			damage: "100-",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 86005,
				cardmarket: 278451
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278451,
				tcgplayer: 86005
			}
		}
	],

}

export default card
