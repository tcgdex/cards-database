import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [589],
	set: Set,

	name: {
		en: "Escavalier",
		fr: "Lançargot",
		es: "Escavalier",
		it: "Escavalier",
		pt: "Escavalier",
		de: "Cavalanzas"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	evolveFrom: {
		en: "Karrablast",
		fr: "Carabing",
		es: "Karrablast",
		it: "Karrablast",
		pt: "Karrablast",
		de: "Laukaps"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Miraculous Armor",
			fr: "Armure Miraculeuse",
			es: "Armadura Milagrosa",
			it: "Armatura Miracolosa",
			pt: "Armadura Milagrosa",
			de: "Wundersame Rüstung"
		},

		effect: {
			en: "This Pokémon takes 100 less damage from attacks from your opponent's Pokémon V (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 100 dégâts de moins provenant des attaques des Pokémon-V de votre adversaire (après application de la Faiblesse et de la Résistance).",
			es: "Los ataques de los Pokémon V de tu rival hacen 100 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Questo Pokémon subisce 100 danni in meno dagli attacchi dei Pokémon-V del tuo avversario, dopo aver applicato debolezza e resistenza.",
			pt: "Este Pokémon recebe 100 pontos de dano a menos de ataques dos Pokémon V do seu oponente (depois de aplicar Fraqueza e Resistência).",
			de: "Diesem Pokémon werden durch Attacken von Pokémon-V deines Gegners 100 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Pike",
			fr: "Javelot",
			es: "Lanza",
			it: "Picca",
			pt: "Lança",
			de: "Langspieß"
		},

		effect: {
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 30 pontos de dano a 1 um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card