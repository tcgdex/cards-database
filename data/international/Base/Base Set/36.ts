import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Magmar",
		'fr-fr': "Magmar",
		'de-de': "Magmar",
		'it-it': "Magmar"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		126,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Fire Punch",
				'fr-fr': "Poing de Feu",
				'de-de': "Feuerschlag",
				'it-it': "Fuocopugno"
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower",
				'fr-fr': "Lance-flamme",
				'de-de': "Flammenwurf",
				'it-it': "Lanciafiamme"
			},
			effect: {
				'en-us': "Discard 1 Energy card attached to Magmar in order to use this attack.",
				'fr-fr': "Défaussez 1 carte Énergie  attachée à Magmar pour pouvoir utiliser cette attaque.",
				'de-de': "Entferne eine auf Magmar abgelegte  Energiekarte, um diesen Angriff auszuführen.",
				'it-it': "Scarta una carta Energia Fuoco assegnata a Magmar per poter usare questo attacco."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Its body always burns with an orange glow that enables it to hide perfectly among flames.",
		'fr-fr': "Son corps en fusion brûle d'une flamme orangée, le rendant invisible dans le feu.",
		'it-it': "La luce arancione che emana dal suo corpo gli permette di mimetizzarsi perfettamente tra le fiamme. LIV 24 N.126"
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273731,
				tcgplayer: 42378
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107033
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107033
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
