import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Entei",
		fr: "Entei",
		es: "Entei",
		it: "Entei",
		pt: "Entei",
		de: "Entei"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Basic",
	illustrator: "NC Empire",

	attacks: [{
		name: {
			en: "Angry Fang",
			fr: "Crocs Enragés",
			es: "Colmillo Irascible",
			it: "Zanna Furiosa",
			pt: "Angry Fang",
			de: "Wütende Fänge"
		},

		effect: {
			en: "This attack does 10 damage for each damage counter on all of your Benched Single Strike Pokémon.",
			fr: "Cette attaque inflige 10 dégâts pour chaque marqueur de dégâts placé sur tous vos Pokémon Poing Final de Banc.",
			es: "Este ataque hace 10 puntos de daño por cada contador de daño en todos tus Pokémon Golpe Brusco en Banca.",
			it: "Questo attacco infligge 10 danni per ogni segnalino danno presente sui tuoi Pokémon Colpo Singolo in panchina.",
			pt: "This attack does 10 damage for each damage counter on all of your Benched Single Strike Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf allen Fokussierter-Angriff-Pokémon auf deiner Bank 10 Schadenspunkte zu."
		},

		damage: "10×",
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			en: "Heat Tackle",
			fr: "Charge Énergétique",
			es: "Placaje Ardiente",
			it: "Calorazione",
			pt: "Heat Tackle",
			de: "Hitze-Tackle"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s’inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "This Pokémon also does 30 damage to itself.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 120,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,

	description: {
		en: "It is said that when it roars, a volcano erupts somewhere around the globe."
	},

	dexId: [244]
}

export default card