import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Magearna V",
		fr: "Magearna V",
		es: "Magearna V",
		it: "Magearna V",
		pt: "Magearna V",
		de: "Magearna V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Gear Throw",
			fr: "Jet d'Engrenage",
			es: "Lanzamiento Engranaje",
			it: "Lancio Meccanico",
			pt: "Arremesso de Engrenagem",
			de: "Getriebewurf"
		},

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Special Laser",
			fr: "Laser Spécial",
			es: "Láser Especial",
			it: "Laser Speciale",
			pt: "Laser Especial",
			de: "Spezial-Laser"
		},

		effect: {
			en: "If this Pokémon has any Special Energy attached, this attack does 120 more damage.",
			fr: "Si de l'Énergie spéciale est attachée à ce Pokémon, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si este Pokémon tiene alguna Energía Especial unida a él, este ataque hace 120 puntos de daño más.",
			it: "Se questo Pokémon ha delle Energie speciali assegnate, questo attacco infligge 120 danni in più.",
			pt: "Se este Pokémon tiver alguma Energia Especial ligada a ele, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn an dieses Pokémon mindestens 1 Spezial-Energie angelegt ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
