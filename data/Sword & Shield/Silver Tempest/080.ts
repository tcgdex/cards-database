import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [606],
	set: Set,

	name: {
		en: "Beheeyem",
		fr: "Neitram",
		es: "Beheeyem",
		it: "Beheeyem",
		pt: "Beheeyem",
		de: "Megalon"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Elgyem",
		fr: "Lewsor",
		es: "Elgyem",
		it: "Elgyem",
		pt: "Elgyem",
		de: "Pygraulon"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Psychic Sphere",
			fr: "Sphère Psy",
			es: "Esfera Psíquica",
			it: "Psicosfera",
			pt: "Esfera Psíquica",
			de: "Psychosphäre"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Psychic Arrow",
			fr: "Flèche Psy",
			es: "Flecha Psíquica",
			it: "Psicofreccia",
			pt: "Flecha Psíquica",
			de: "Psychopfeil"
		},

		effect: {
			en: "This attack does 60 damage to 1 of your opponent's Pokémon. Also apply Weakness and Resistance for Benched Pokémon.",
			fr: "Cette attaque inflige 60 dégâts à l'un des Pokémon de votre adversaire. Appliquez aussi la Faiblesse et la Résistance aux Pokémon de Banc.",
			es: "Este ataque hace 60 puntos de daño a 1 de los Pokémon de tu rival. Aplica también Debilidad y Resistencia a los Pokémon en Banca.",
			it: "Questo attacco infligge 60 danni a uno dei Pokémon del tuo avversario. Applica debolezza e resistenza anche ai Pokémon in panchina.",
			pt: "Este ataque causa 60 pontos de dano a 1 dos Pokémon do seu oponente. Também aplique Fraqueza e Resistência aos Pokémon no Banco.",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 60 Schadenspunkte zu. Wende Schwäche und Resistenz auch bei Pokémon auf der Bank an."
		}
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card