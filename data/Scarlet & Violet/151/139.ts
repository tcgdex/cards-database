import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [139],
	set: Set,

	name: {
		fr: "Amonistar",
		en: "Omastar",
		es: "Omastar",
		it: "Omastar",
		pt: "Omastar",
		de: "Amoroso"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	evolveFrom: {
		fr: "Amonita",
		en: "Omanyte",
		es: "Omanyte",
		it: "Omanyte",
		pt: "Omanyte",
		de: "Amonitas"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Tentacules Primitifs",
			en: "Primordial Tentacles",
			es: "Tentáculos Primordiales",
			it: "Tentacoli Primordiali",
			pt: "Tentáculos Primitivos",
			de: "Primordiale Tentakel"
		},

		effect: {
			fr: "Tant que ce Pokémon est sur le Poste Actif, le Pokémon Actif de votre adversaire ne peut pas battre en retraite.",
			en: "As long as this Pokémon is in the Active Spot, your opponent's Active Pokémon can't retreat.",
			es: "Mientras este Pokémon esté en el Puesto Activo, el Pokémon Activo de tu rival no puede retirarse.",
			it: "Fintanto che questo Pokémon è in posizione attiva, il Pokémon attivo del tuo avversario non può ritirarsi.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, o Pokémon Ativo do seu oponente não poderá recuar.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, kann sich das Aktive Pokémon deines Gegners nicht zurückziehen."
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			fr: "Scission Aqua",
			en: "Aqua Split",
			es: "Isoaqua",
			it: "Spartiacque",
			pt: "Divisão Aquática",
			de: "Wasserteiler"
		},

		effect: {
			fr: "Cette attaque inflige aussi 30 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			en: "This attack also does 30 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			es: "Este ataque también hace 30 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 30 danni a due dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 30 pontos de dano a 2 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt auch 2 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 90
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		normal: false
	},

	illustrator: "Akira Komayama",

	thirdParty: {
		cardmarket: 733734
	}
}

export default card
