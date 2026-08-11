import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Trubbish",
		'fr-fr': "Miamiasme",
		'es-es': "Trubbish",
		'it-it': "Trubbish",
		'pt-br': "Trubbish",
		'de-de': "Unratütox"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		568,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Pile Up",
				'fr-fr': "Amoncellement",
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your deck for a Pokémon Tool card, reveal it, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Lancez une pièce. Si c'est face, cherchez une carte Outil Pokémon dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sludge Toss",
				'fr-fr': "Giclée Vaseuse",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The combination of garbage bags and industrial waste caused the chemical reaction that created this Pokémon.",
	},

	thirdParty: {
		cardmarket: 280803,
		tcgplayer: 90067
	}
}

export default card
