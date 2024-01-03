import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Electivire",
		fr: "Élekable",
		es: "Electivire",
		it: "Electivire",
		pt: "Electivire",
		de: "Elevoltek"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	evolveFrom: {
		en: "Electabuzz",
		fr: "Élektek",
		es: "Electabuzz",
		it: "Electabuzz",
		pt: "Electabuzz",
		de: "Elektek"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Explosive Bolt",
			fr: "Foudre Explosive",
			es: "Rayo Explosivo",
			it: "Lampo Esplosivo",
			pt: "Raio Explosivo",
			de: "Explosiver Blitz"
		},

		effect: {
			en: "If any of your Benched Magmortar have any damage counters on them, this attack does 90 more damage.",
			fr: "Si au moins un marqueur de dégâts est placé sur l'un de vos Maganon de Banc, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si alguno de tus Magmortar en Banca tiene algún contador de daño sobre él, este ataque hace 90 puntos de daño más.",
			it: "Se uno qualsiasi dei tuoi Magmortar in panchina ha dei segnalini danno, questo attacco infligge 90 danni in più.",
			pt: "Se algum dos seus Magmortar no Banco tiver algum contador de dano nele, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn auf mindestens 1 Magbrant auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "High-Voltage Current",
			fr: "Courant Haute-Tension",
			es: "Corriente de Alta Tensión",
			it: "Corrente Folgorante",
			pt: "Corrente de Alta Tensão",
			de: "Hochspannungsstrom"
		},

		effect: {
			en: "This attack does 50 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 50 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 50 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 50 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 50 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt jedem Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	retreat: 3,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card