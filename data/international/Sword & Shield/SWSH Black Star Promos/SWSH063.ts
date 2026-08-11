import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pikachu V",
		'fr-fr': "Pikachu V",
		'es-es': "Pikachu V",
		'it-it': "Pikachu V",
		'pt-br': "Pikachu V",
		'de-de': "Pikachu V"
	},

	illustrator: "Ryota Murayama",
	rarity: "Promo",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],

	attacks: [{
		name: {
			'en-us': "Pika Ball",
			'fr-fr': "Pika Ball",
			'es-es': "Pika Ball",
			'it-it': "Pikasfera",
			'pt-br': "Bola Pikachu",
			'de-de': "Pikaball"
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			'en-us': "Circle Circuit",
			'fr-fr': "Cercle Électrik",
			'es-es': "Circuito Circular",
			'it-it': "Elettroruota",
			'pt-br': "Circuito Circular",
			'de-de': "Rundparcours"
		},

		effect: {
			'en-us': "This attack does 30 damage for each of your Benched Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon de Banc.",
			'es-es': "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon en Banca.",
			'it-it': "Questo attacco infligge 30 danni per ogni Pokémon nella tua panchina.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada Pokémon no seu Banco.",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf deiner Bank 30 Schadenspunkte zu."
		},

		damage: "30×",
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	stage: "Basic",
	dexId: [25],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V",

	thirdParty: {
		cardmarket: 461594
	}
}

export default card
