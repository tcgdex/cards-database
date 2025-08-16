import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [922],
	set: Set,

	name: {
		fr: "Pohmotte",
		en: "Pawmo",
		es: "Pawmo",
		it: "Pawmo",
		pt: "Pawmo",
		de: "Pamamo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			fr: "Choc Statique",
			en: "Static Shock",
			es: "Impacto Estático",
			it: "Shock Statico",
			pt: "Choque de Estática",
			de: "Statischer Schock"
		},

		damage: 20
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			fr: "Électrojectile",
			en: "Electrobullet",
			es: "Electrobala",
			it: "Elettrodardo",
			pt: "Bala Elétrica",
			de: "Elektrokugel"
		},

		effect: {
			fr: "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			es: "Este ataque también hace 30 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Hitoshi Ariga"
}

export default card