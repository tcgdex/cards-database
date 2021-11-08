import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Morpeko V",
		en: "Morpeko V",
		es: "Morpeko V",
		it: "Morpeko V",
		pt: "Morpeko V",
		de: "Morpeko V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Lightning"],

	attacks: [{
		name: {
			fr: "Étincelle",
			en: "Spark",
			es: "Chispa",
			it: "Scintilla",
			pt: "Faísca",
			de: "Funkensprung"
		},

		effect: {
			fr: "Cette attaque inflige aussi 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			es: "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			fr: "Électro Roue",
			en: "Electro Wheel",
			es: "Electrorrueda",
			it: "Ruota Elettrica",
			pt: "Roda Elétrica",
			de: "Elektrorad"
		},

		effect: {
			fr: "Défaussez une Énergie de ce Pokémon. Dans ce cas, échangez-le contre l'un de vos Pokémon de Banc.",
			en: "Discard an Energy from this Pokémon. If you do, switch it with 1 of your Benched Pokémon.",
			es: "Descarta 1 Energía de este Pokémon. Si lo haces, cámbialo por 1 de tus Pokémon en Banca.",
			it: "Scarta un'Energia da questo Pokémon. Se lo fai, scambialo con uno della tua panchina.",
			pt: "Descarte 1 Energia deste Pokémon. Se fizer isto, troque-o por 1 dos seus Pokémon no Banco.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel. Wenn du das machst, tausche es gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 150,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V"
}

export default card
