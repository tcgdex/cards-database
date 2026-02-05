import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Kadabra",
		fr: "Kadabra",
		de: "Kadabra",
		it: "Kadabra"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		64,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Abra",
		it: "Abra"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Recover",
				fr: "Soin",
				de: "Erholung",
				it: "Ripresa"
			},
			effect: {
				en: "Discard 1 Energy card attached to Kadabra in order use this attack. Remove all damage counters from Kadabra.",
				fr: "Défaussez 1 carte Énergie  attachée à Kadabra pour pouvoir utiliser cette attaque. Retirez tous les marqueurs de dégâts sur Kadabra.",
				de: "Entferne eine auf kadabra abgelegte  Energiekarte, um diesen Angriff auszuführen. Entferne alle Schadensmarken von Kadabra.",
				it: "Scarta una carta Energia Psico assegnata a Kadabra per poter usare questo attacco. Togli tutti i segnalini danno da Kadabra.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Super Psy",
				fr: "Super Psy",
				de: "Super-Psychoschlag",
				it: "Superpsico"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Son corps émet des ondes alpha provoquant des migraines à ceux qui se trouvent à proximité.",
		it: "Emette dal corpo speciali onde alfa che causano mal di testa a chiunque gli sia vicino. LIV 38 N.64"
	},

	thirdParty: {
		cardmarket: 273727,
		tcgplayer: 42374
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

	related: [
		{
			type: "translation",
			cardPath: "data-asia/PMCG/PMCG1/046.ts"
		}
	]
}

export default card
