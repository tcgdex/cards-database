import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Morpeko V",
		'fr-fr': "Morpeko V",
		'es-es': "Morpeko V",
		'it-it': "Morpeko V",
		'pt-br': "Morpeko V",
		'de-de': "Morpeko V"
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	hp: 170,
	types: ["Lightning"],

	attacks: [{
		name: {
			'en-us': "Spark",
			'fr-fr': "Étincelle",
			'es-es': "Chispa",
			'it-it': "Scintilla",
			'pt-br': "Faísca",
			'de-de': "Funkensprung"
		},

		effect: {
			'en-us': "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Electro Wheel",
			'fr-fr': "Électro Roue",
			'es-es': "Electrorrueda",
			'it-it': "Ruota Elettrica",
			'pt-br': "Roda Elétrica",
			'de-de': "Elektrorad"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon. If you do, switch it with 1 of your Benched Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon. Dans ce cas, échangez-le contre l'un de vos Pokémon de Banc.",
			'es-es': "Descarta 1 Energía de este Pokémon. Si lo haces, cámbialo por 1 de tus Pokémon en Banca.",
			'it-it': "Scarta un'Energia da questo Pokémon. Se lo fai, scambialo con uno della tua panchina.",
			'pt-br': "Descarte 1 Energia deste Pokémon. Se fizer isto, troque-o por 1 dos seus Pokémon no Banco.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel. Wenn du das machst, tausche es gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 150,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	stage: "Basic",
	dexId: [877],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V",

	thirdParty: {
		cardmarket: 510185
	}
}

export default card
