import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Roserade",
		fr: "Roserade",
		es: "Roserade",
		it: "Roserade",
		pt: "Roserade",
		de: "Roserade"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Roselia",
		fr: "Rosélia",
		es: "Roselia",
		it: "Roselia",
		pt: "Roselia",
		de: "Roselia"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Poisonous Whip",
			fr: "Fouet Empoisonné",
			es: "Látigo Venenoso",
			it: "Frustata Velenosa",
			pt: "Chicote Venenoso",
			de: "Giftpeitsche"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Assassin's Rose",
			fr: "Rose Assassine",
			es: "Rosa Asesina",
			it: "Rosa Aggressiva",
			pt: "Rosa Facínora",
			de: "Meuchelrose"
		},

		effect: {
			en: "If your opponent's Active Pokémon is affected by a Special Condition, this attack also does 60 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige aussi 60 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, este ataque también hace 60 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Se il Pokémon attivo del tuo avversario è influenzato da una condizione speciale, questo attacco infligge anche 60 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Se o Pokémon Ativo do seu oponente estiver afetado por uma Condição Especial, este ataque também causará 60 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, fügt diese Attacke auch 1 Pokémon auf der Bank deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card
