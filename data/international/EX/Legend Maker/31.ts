import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Dunsparce",
		fr: "Insolourdo",
		de: "Dummisel"
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
				en: "Deadlock",
				fr: "Impasse",
				de: "Stillstand"
			},
			effect: {
				en: "As long as Dunsparce is your Active Pokémon, your opponent's Dunsparce can't attack.",
				fr: "Tant qu'Insolourdo est votre Pokémon Actif, l'Insolourdo de votre adversaire ne peut pas attaquer.",
				de: "Solange Dummisel dein Aktives Pokémon ist, können Dummisel deines Gegners nicht angreifen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Down Draw",
				fr: "Pioche du dessous",
				de: "Tiefer Zug"
			},
			effect: {
				en: "Draw 2 cards from the bottom of your deck.",
				fr: "Piochez 2 cartes du dessous de votre deck.",
				de: "Ziehe die untersten 2 Karten denes Decks."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tripping Turn",
				fr: "Tour trébuchant",
				de: "Stolpernder Wechsel"
			},
			effect: {
				en: "The Defending Pokémon is now Confused. You may switch Dunsparce with 1 of your Benched Pokémon.",
				fr: "Le Pokémon Défenseur est maintenant Confus. Vous pouvez échanger Insolourdo avec 1 des Pokémon de votre Banc.",
				de: "Das Verteidigende Pokémon ist jetzt verwirrt. Du kannst Dummisel gegen 1 Pokémon auf deiner Bank austauschen."
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
