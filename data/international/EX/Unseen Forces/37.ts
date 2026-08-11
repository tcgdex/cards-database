import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Corsola",
		'fr-fr': "Corayon",
		'de-de': "Corasonn"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		222,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Cry for Help",
				'fr-fr': "Appel au secours",
				'de-de': "Cry for Help"
			},
			effect: {
				'en-us': "Search your deck for a Water or Fighting Pokémon (excluding Pokémon-ex), show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck un Pokémon  ou  (Pokémon-ex exclus), montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for a  or  Pokémon (excluding Pokémon-ex), show it to your opponent, any put it into your hand. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Double Attack",
				'fr-fr': "Double attaque",
				'de-de': "Double Attack"
			},
			effect: {
				'en-us': "Choose 2 of your opponent's Benched Pokémon. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 2 des Pokémon de Banc de votre adversaire. Cette attaque inflige 10 dégâts à chacun. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Choose 2 of your opponent's Benched Pokémon. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84440,
				cardmarket: 276683
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 84440,
				cardmarket: 276683
			},
		},
		{
			type: "normal",
			stamp: ["akira-miyazaki"],
			thirdParty: {
				tcgplayer: 479529,
				cardmarket: 869360
			},
		}
	],
}

export default card
