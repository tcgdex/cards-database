import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Starmie",
		'fr-fr': "Staross",
		'de-de': "Starmie",
		'it-it': "Starmie"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		121,
	],

	hp: 60,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Staryu",
		'fr-fr': "Stari",
		'it-it': "Staryu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Recover",
				'fr-fr': "Soin",
				'de-de': "Erholung",
				'it-it': "Ripresa"
			},
			effect: {
				'en-us': "Discard 1 Energy card to Starmie in order to use this attack. Remove all damage counters from Starmie.",
				'fr-fr': "Défaussez 1 carte Énergie  attachée à Staross pour pouvoir utiliser cette attaque. Retirez tous les marqueurs de dégâts sur Staross.",
				'de-de': "Entferne eine auf Starmie abgelegte  Energiekarte, um diesen Angriff auszuführen. Entferne alle Schadensmarken von Starmie.",
				'it-it': "Scarta una carta Energia Acqua assegnata a Starmie per poter usare questo attacco. Togli tutti i segnalini danno da Starmie.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Star Freeze",
				'fr-fr': "Étoile gelante",
				'de-de': "Sternenfrost",
				'it-it': "Assideramento stellare"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon gelähmt.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon Difensore è Paralizzato.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Its central core glows with the seven colors of the rainbow. Some people value this core as a gem.",
		'fr-fr': "Son cœur brille des couleurs de l'arc-en-ciel. On raconte que c'est une pierre précieuse.",
		'it-it': "Il suo nucleo centrale brilla  dei sette colori dell'arcobaleno. Valutato da alcuni come una gemma preziosa. LIV 28 N.121"
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273759,
				tcgplayer: 42409
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107061
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107061
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
