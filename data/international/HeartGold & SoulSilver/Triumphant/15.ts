import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Bronzong",
		'fr-fr': "Archéodong",
		'de-de': "Bronzong"
	},

	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [437],

	hp: 90,

	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Bronzor",
		'fr-fr': "Archeomire"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Legend Ceremony",
				'fr-fr': "Cérémonie légendaire",
				'de-de': "Legendenzeremonie"
			},
			effect: {
				'en-us': "Search your deck for both halves of a Pokémon LEGEND, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez les deux moitiés d’un Pokémon LÉGENDE dans votre deck, montrez-les à votre adversaire, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				'de-de': "Durchsuche dein Deck nach beiden Hälften einer Pokémon-LEGENDE, zeige sie deinem Gegner und nimm sie auf die Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Reflect Energy",
				'fr-fr': "Renvoi d’énergie",
				'de-de': "Energiereflexion"
			},
			effect: {
				'en-us': "Move an Energy card attached to Bronzong to 1 of your Benched Pokémon.",
				'fr-fr': "Prenez une carte Énergie attachée à Archéodong et attachez-la à l’un de vos Pokémon de Banc.",
				'de-de': "Lege eine Energiekarte, die an Bronzong angelegt ist, an 1 Pokémon auf deiner Bank an."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Ancient people believed that petitioning Bronzong for rain was the way to make crops grow."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83997,
				cardmarket: 279545
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279545,
				tcgplayer: 83997
			}
		},
	],

}

export default card
