import { Card } from 'models/database/card'
import Set from '../Jungle'

const card: Card = {
	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'de-de': "Pikachu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Pichu",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Spark",
				'fr-fr': "Étincelle",
				'de-de': "Funkensprung"
			},
			effect: {
				'en-us': "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Si votre adversaire a au moins 1 Pokémon sur son Banc, choisissez l'un d'eux ; cette attaque lui inflige 10 dégâts. (Ne pas appliquer la Faiblesse et la Résistance au Pokémon du Banc.)",
				'de-de': "Falls dein Gegner irgendwelche Pokémon auf der Bank hat, wählt er eines von ihnen und dieser Angriff fügt ihm 10 Schadenspunkte zu. (Schwäche und Resistenz für Pokémon auf der Bank nicht anwenden.)"
			},
			damage: 20,

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
		'en-us': "When several of these Pokémon gather, their electricity can build and cause lightning storms.",
		'fr-fr': "Quand plusieurs de ces Pokémon se réunissent, ils provoquent de gigantesques orages."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273857,
				tcgplayer: 45163
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273857,
				tcgplayer: 45163
			}
		},
		{
			type: "normal",
			stamp: ["pikachu-tail"]
		},
		{
			type: "normal",
			stamp: ["wotc"]
		}
	],
}

export default card
