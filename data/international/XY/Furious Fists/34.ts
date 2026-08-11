import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Dedenne",
		'fr-fr': "Dedenne",
		'es-es': "Dedenne",
		'it-it': "Dedenne",
		'pt-br': "Dedenne",
		'de-de': "Dedenne"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		702,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Entrainment",
				'fr-fr': "Ten-Danse",
				'es-es': "Danza Amiga",
				'it-it': "Saltamicizia",
				'pt-br': "Embarque",
				'de-de': "Zwango"
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
			],
			name: {
				'en-us': "Energy Short",
				'fr-fr': "Énergie Dérivée",
				'es-es': "Cortocircuito de Energía",
				'it-it': "Crisi Energetica",
				'pt-br': "Colapso de Energia",
				'de-de': "Umkehrenergie"
			},
			effect: {
				'en-us': "This attack does 20 damage times the amount of Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre d'Énergies attachées au Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 20 puntos de daño por cada Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 20 danni per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Esse ataque causa 20 de danos adicionais vezes a quantidade de Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der an das Aktive Pokémon deines Gegners angelegten Energien zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its whiskers serve as antennas. By sending and receiving electrical waves, it can communicate with others over vast distances.",
	},

	thirdParty: {
		cardmarket: 281698,
		tcgplayer: 92209
	}
}

export default card
