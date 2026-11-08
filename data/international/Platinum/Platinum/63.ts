import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Silcoon",
		'fr-fr': "Armulys",
		'de-de': "Schaloko"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [266],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Wurmple",
		'fr-fr': "Chenipotte"
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Ascension",
				'fr-fr': "Ascension",
				'de-de': "Ascension"
			},
			effect: {
				'en-us': "Search your deck for a card that evolves from Silcoon and put it onto Silcoon. (This counts as evolving Silcoon.) Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck une carte qui évolue d'Armulys et placez-la sur Armulys. (Vous le faites ainsi évoluer.) Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for a card that evolves from Silcoon and put it onto Silcoon. (This counts as evolving Silcoon.) Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Sticky String",
				'fr-fr': "Ficelle collante",
				'de-de': "Sticky String"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It wraps silk around the branches of a tree. It drinks rainwater on its silk while awaiting evolution."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 89213,
				cardmarket: 278484
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278484,
				tcgplayer: 89213
			}
		}
	],

}

export default card
