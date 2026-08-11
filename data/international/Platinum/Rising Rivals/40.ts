import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Gengar GL",
		'fr-fr': "Ectoplasma  Niv. 65",
		'de-de': "Gengar GL"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [94],

	hp: 70,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Confuse Ray",
				'fr-fr': "Onde folie",
				'de-de': "Konfustrahl"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Attack and Hide",
				'fr-fr': "Attaquer et se cacher",
				'de-de': "Angreifen und Verstecken"
			},
			effect: {
				'en-us': "Put 3 damage counters on 1 of your opponent's Pokémon. You may shuffle Gengar GL and all cards attached to it back into your deck.",
				'fr-fr': "Placez 3 marqueurs de dégât sur 1 des Pokémon de votre adversaire. Vous pouvez mélanger Ectoplasma  ainsi que toutes les cartes qui lui sont attachées avec votre deck.",
				'de-de': "Lege 3 Schadensmarken auf 1 Pokémon deines Gegners. Du kannst Gengar GL und alle Karten, die an es angelegt sind, in dein Deck mischen."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278614,
				tcgplayer: 85681
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278614,
				tcgplayer: 85681
			}
		},
	],

}

export default card
