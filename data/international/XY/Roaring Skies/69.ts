import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Skarmory",
		'fr-fr': "Airmure",
		'es-es': "Skarmory",
		'it-it': "Skarmory",
		'pt-br': "Skarmory",
		'de-de': "Panzaeron"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		227,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Call for Family",
				'fr-fr': "Appel à la Famille",
				'es-es': "Llamar a la Familia",
				'it-it': "Cerca Famiglia",
				'pt-br': "Chamar a Família",
				'de-de': "Familienruf"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Cherchez jusqu'à 2 Pokémon de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Baraja las cartas de tu baraja después.",
				'it-it': "Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure em seu baralho até 2 Pokémon Básicos e coloque-os no seu Banco. Em seguida, embaralhe seus cards.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Blow Through",
				'fr-fr': "Grosse Bourrasque",
				'es-es': "Gran Torbellino",
				'it-it': "Colposecco",
				'pt-br': "Sopro Intenso",
				'de-de': "Durchdringender Strahl"
			},
			effect: {
				'en-us': "If there is any Stadium card in play, this attack does 30 more damage.",
				'fr-fr': "S'il y a une carte Stade en jeu, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Si hay alguna carta de Estadio en juego, este ataque hace 30 puntos de daño más.",
				'it-it': "Se c'è in gioco una carta Stadio, questo attacco infligge 30 danni in più.",
				'pt-br': "Se houver algum card de Estádio em jogo, este ataque causará 30 de danos adicionais.",
				'de-de': "Wenn eine Stadionkarte im Spiel ist, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

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
		'en-us': "Despite being clad entirely in iron-hard armor, it flies at speed of over 180 mph.",
	},

	thirdParty: {
		cardmarket: 282737,
		tcgplayer: 98105
	}
}

export default card
