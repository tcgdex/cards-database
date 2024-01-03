import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Zarude V",
		fr: "Zarude V",
		es: "Zarude V",
		it: "Zarude V",
		pt: "Zarude V",
		de: "Zarude V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Leap to Leap",
			fr: "Sur Saut",
			es: "De Rama en Rama",
			it: "Salto Doppio",
			pt: "De Galho em Galho",
			de: "Doppelsprung"
		},

		effect: {
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 30 pontos de dano a 1 um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 30
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Jungle Rage",
			fr: "Jungle en Furie",
			es: "Furia Selvática",
			it: "Giunglafuria",
			pt: "Ira Selvática",
			de: "Dschungelwut"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon V, this attack does 120 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-V, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon V, este ataque hace 120 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-V, questo attacco infligge 120 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon V, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-V ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "120+"
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
