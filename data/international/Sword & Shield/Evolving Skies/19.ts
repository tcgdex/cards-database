import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Entei",
		'fr-fr': "Entei",
		'es-es': "Entei",
		'it-it': "Entei",
		'pt-br': "Entei",
		'de-de': "Entei"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Basic",
	illustrator: "NC Empire",

	attacks: [{
		name: {
			'en-us': "Angry Fang",
			'fr-fr': "Crocs Enragés",
			'es-es': "Colmillo Irascible",
			'it-it': "Zanna Furiosa",
			'pt-br': "Angry Fang",
			'de-de': "Wütende Fänge"
		},

		effect: {
			'en-us': "This attack does 10 damage for each damage counter on all of your Benched Single Strike Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts pour chaque marqueur de dégâts placé sur tous vos Pokémon Poing Final de Banc.",
			'es-es': "Este ataque hace 10 puntos de daño por cada contador de daño en todos tus Pokémon Golpe Brusco en Banca.",
			'it-it': "Questo attacco infligge 10 danni per ogni segnalino danno presente sui tuoi Pokémon Colpo Singolo in panchina.",
			'pt-br': "This attack does 10 damage for each damage counter on all of your Benched Single Strike Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf allen Fokussierter-Angriff-Pokémon auf deiner Bank 10 Schadenspunkte zu."
		},

		damage: "10×",
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			'en-us': "Heat Tackle",
			'fr-fr': "Charge Énergétique",
			'es-es': "Placaje Ardiente",
			'it-it': "Calorazione",
			'pt-br': "Heat Tackle",
			'de-de': "Hitze-Tackle"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "This Pokémon also does 30 damage to itself.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
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
		'en-us': "It is said that when it roars, a volcano erupts somewhere around the globe."
	},

	dexId: [244],
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574043,
				tcgplayer: 246835
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574043,
				tcgplayer: 246835
			}
		},
	],
}

export default card
