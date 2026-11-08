import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Clefairy",
		'fr-fr': "Mélofée",
		'de-de': "Piepi"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		35,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Doubleslap",
				'fr-fr': "Torgnoles",
				'de-de': "Doubleslap"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip 2 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10x",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Squaredance",
				'fr-fr': "Bourrée",
				'de-de': "Squaredance"
			},
			effect: {
				'en-us': "Flip a number of coins equal to the total number of Pokémon in play. For each heads, you may search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Lancez un nombre de pièces égal au nombre total de Pokémon en jeu. Pour chaque face, vous pouvez chercher une carte Énergie de base dans votre deck, montrez-la à votre adversaire et placez-la dans votre main. Mélangez ensuite votre deck.",
				'de-de': "Flip a number of coins equal to the total number of Pokémon in play. For each heads, you may search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward."
			},

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
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "The moonlight that it stores in the wings on its back apparently gives it the ability to float in midair.",
		'fr-fr': "Le clair de lune qui est stocké dans les ailes qu'il porte sur son dos lui donne apparemment la possibilité de flotter dans les airs."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274430,
				tcgplayer: 84352
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274430,
				tcgplayer: 84352
			}
		}
	]
}

export default card
