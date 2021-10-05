import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu V",
		fr: "Pikachu V",
		es: "Pikachu V",
		it: "Pikachu V",
		pt: "Pikachu V",
		de: "Pikachu V"
	},

	illustrator: "Ryota Murayama",
	rarity: "None",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],

	attacks: [{
		name: {
			en: "Pika Ball",
			fr: "Pika Ball",
			es: "Pika Ball",
			it: "Pikasfera",
			pt: "Pika Ball",
			de: "Pikaball"
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			en: "Circle Circuit",
			fr: "Cercle Électrik",
			es: "Circuito Circular",
			it: "Elettroruota",
			pt: "Circle Circuit",
			de: "Rundparcours"
		},

		effect: {
			en: "This attack does 30 damage for each of your Benched Pokémon.",
			fr: "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon de Banc.",
			es: "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon en Banca.",
			it: "Questo attacco infligge 30 danni per ogni Pokémon nella tua panchina.",
			pt: "This attack does 30 damage for each of your Benched Pokémon.",
			de: "Diese Attacke fügt für jedes Pokémon auf deiner Bank 30 Schadenspunkte zu."
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
	suffix: "V",
	dexId: [25],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card