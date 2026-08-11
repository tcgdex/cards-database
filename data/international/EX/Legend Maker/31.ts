import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Dunsparce",
		'fr-fr': "Insolourdo",
		'de-de': "Dummisel"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		206,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Deadlock",
				'fr-fr': "Impasse",
				'de-de': "Stillstand"
			},
			effect: {
				'en-us': "As long as Dunsparce is your Active Pokémon, your opponent's Dunsparce can't attack.",
				'fr-fr': "Tant qu'Insolourdo est votre Pokémon Actif, l'Insolourdo de votre adversaire ne peut pas attaquer.",
				'de-de': "Solange Dummisel dein Aktives Pokémon ist, können Dummisel deines Gegners nicht angreifen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Down Draw",
				'fr-fr': "Pioche du dessous",
				'de-de': "Tiefer Zug"
			},
			effect: {
				'en-us': "Draw 2 cards from the bottom of your deck.",
				'fr-fr': "Piochez 2 cartes du dessous de votre deck.",
				'de-de': "Ziehe die untersten 2 Karten denes Decks."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tripping Turn",
				'fr-fr': "Tour trébuchant",
				'de-de': "Stolpernder Wechsel"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused. You may switch Dunsparce with 1 of your Benched Pokémon.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus. Vous pouvez échanger Insolourdo avec 1 des Pokémon de votre Banc.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verwirrt. Du kannst Dummisel gegen 1 Pokémon auf deiner Bank austauschen."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276908,
		tcgplayer: 85009
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
