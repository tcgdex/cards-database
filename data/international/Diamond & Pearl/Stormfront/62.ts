import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus",
		'de-de': "Nebulak"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		92,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'fr-fr': "Fantominus",
	},

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Pitch-Dark",
				'fr-fr': "Noir complet",
				'de-de': "Stockdunkel"
			},
			effect: {
				'en-us': "You opponent can't play any Trainer cards from his or her hand during your opponent's next turn.",
				'fr-fr': "Votre adversaire ne peut pas jouer de cartes Dresseur de sa main lors de son prochain tour.",
				'de-de': "In seinem nächsten Zug kann dein Gegner keine Trainerkarten von seiner Hand spielen."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Trick Gas",
				'fr-fr': "Gaz piégeant",
				'de-de': "Gas-Trick"
			},
			effect: {
				'en-us': "You may switch Gastly with 1 of your Benched Pokémon.",
				'fr-fr': "Vous pouvez échanger Fantominus avec 1 des Pokémon de votre Banc.",
				'de-de': "Du kannst Nebulak gegen 1 Pokémon auf deiner Bank austauschen."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This Pokémon's body is 95% made up of gases, which are blown away by strong gusts of wind.",
		'fr-fr': "Le corps de ce Pokémon est composé de gaz à 95%. Une bourrasque suffit à le disperser."
	},

	thirdParty: {
		cardmarket: 278360,
		tcgplayer: 85653
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["jason-martinez"]
		},
	]
}

export default card
