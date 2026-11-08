import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [635],
	set: Set,
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		'en-us': "Hydreigon C",
		'fr-fr': "Trioxhydre C",
		'de-de': "Trikephalo C",
		'es-es': "Hydreigon C",
		'pt-br': "Hydreigon C",
		'it-it': "Hydreigon C"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Morsure",
			'de-de': "Biss",
			'es-es': "Mordisco",
			'pt-br': "Mordida",
			'it-it': "Morso",
			'en-us': "Bite"
		},

		damage: 30
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'fr-fr': "Lame Folle",
			'de-de': "Berserkerklinge",
			'es-es': "Hoja Locura",
			'pt-br': "Lâmina Possuída",
			'it-it': "Lamaimpazzita",
			'en-us': "Berserker Blade"
		},

		effect: {
			'fr-fr': "Cette attaque inflige aussi 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt auch 2 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'es-es': "Este ataque también hace 20 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque também causa 20 pontos de dano a 2 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'it-it': "Questo attacco infligge anche 20 danni a due dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'en-us': "This attack also does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		},

		damage: 100
	}],

	retreat: 2
}

export default card
