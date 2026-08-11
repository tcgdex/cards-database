import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Mightyena",
		'fr-fr': "Grahyena de Team Aqua",
		'de-de': "Team Aquas Magnayen"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [262],

	hp: 80,

	types: [
		"Darkness"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Aqua Call",
				'fr-fr': "Demande d'Aqua",
				'de-de': "Aqua Call"
			},
			effect: {
				'en-us': "Search your deck for Pokémon that has Team Aqua in its name, show up to 3 of them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck jusqu'à 3 Pokémon dont le nom comporte Team Aqua, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for Pokémon that has Team Aqua in its name, show up to 3 of them to your opponent, and put them into your hand. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Wave Splash",
				'fr-fr': "Grosse vague",
				'de-de': "Wave Splash"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
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


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275807,
				tcgplayer: 89793
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275807,
				tcgplayer: 89793
			}
		},
	],

}

export default card
