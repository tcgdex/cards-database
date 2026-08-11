import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Pidgey",
		'fr-fr': "Roucool",
		'de-de': "Taubsi"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [16],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Messenger",
				'fr-fr': "Messager",
				'de-de': "Bote"
			},
			effect: {
				'en-us': "Search your deck for a Pokémon, show it to your opponent, and put it into your hand. Shuffle Pidgey and all cards attached to it back into your deck.",
				'fr-fr': "Cherchez un Pokémon dans votre deck, montrez-le à votre adversaire et ajoutez-le à votre main. Mélangez Roucool et toutes les cartes qui lui sont attachées avec votre deck.",
				'de-de': "Durchsuche dein Deck nach 1 Pokémon-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische Taubsi und alle daran angelegten Karten zurück in dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Glide",
				'fr-fr': "Glissade",
				'de-de': "Gleiten"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Common in grassy areas and forests, it is very docile and will chase off enemies by flapping up sand."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88051,
				cardmarket: 279601
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279601,
				tcgplayer: 88051
			}
		},
	],

}

export default card
