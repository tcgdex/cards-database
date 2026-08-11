import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [898],
	set: Set,
	illustrator: "5ban Graphics",
	category: "Pokemon",
	stage: "Basic",

	name: {
		'en-us': "Ice Rider Calyrex V",
		'fr-fr': "Sylveroy Cavalier du Froid V",
		'de-de': "Schimmelreiter-Coronospa V",
		'es-es': "Calyrex Jinete Glacial V",
		'pt-br': "Calyrex Cavaleiro Glacial V",
		'it-it': "Calyrex Cavaliere Glaciale V"
	},

	rarity: "Promo",
	hp: 210,
	types: ["Water"],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Blizzard",
			'fr-fr': "Blizzard",
			'de-de': "Blizzard",
			'es-es': "Ventisca",
			'pt-br': "Nevasca",
			'it-it': "Bora"
		},

		effect: {
			'en-us': "This attack also does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'es-es': "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque também causa 10 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'it-it': "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina."
		},

		damage: 40
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Frost Stamp",
			'fr-fr': "Piétinement Givré",
			'de-de': "Froststoß",
			'es-es': "Pisada Gélida",
			'pt-br': "Selo Congelante",
			'it-it': "Geloimpronta"
		},

		damage: 140
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E",
	suffix: "V",

	thirdParty: {
		cardmarket: 572539
	}
}

export default card
