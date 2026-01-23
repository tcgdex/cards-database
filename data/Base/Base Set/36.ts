import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Magmar",
		fr: "Magmar",
		de: "Magmar",
		it: "Magmar"
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
				en: "Fire Punch",
				fr: "Poing de Feu",
				de: "Feuerschlag",
				it: "Fuocopugno"
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
				en: "Flamethrower",
				fr: "Lance-flamme",
				de: "Flammenwurf",
				it: "Lanciafiamme"
			},
			effect: {
				en: "Discard 1 Energy card attached to Magmar in order to use this attack.",
				fr: "Défaussez 1 carte Énergie  attachée à Magmar pour pouvoir utiliser cette attaque.",
				de: "Entferne eine auf Magmar abgelegte  Energiekarte, um diesen Angriff auszuführen.",
				it: "Scarta una carta Energia Fuoco assegnata a Magmar per poter usare questo attacco."
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

	description: {
		fr: "Son corps en fusion brûle d'une flamme orangée, le rendant invisible dans le feu.",
		it: "La luce arancione che emana dal suo corpo gli permette di mimetizzarsi perfettamente tra le fiamme. LIV 24 N.126"
	},

	thirdParty: {
		cardmarket: 273731,
		tcgplayer: 42378
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
