import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Alakazam ex",
		fr: "Alakazam-ex",
		es: "Alakazam ex",
		it: "Alakazam-ex",
		pt: "Alakazam ex",
		de: "Simsala-ex"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Mind Jack",
			fr: "Emprise Mentale",
			es: "Levantamente",
			it: "Sollevamente",
			pt: "Tomada Mental",
			de: "Gedankenstoß"
		},

		effect: {
			en: "This attack does 30 more damage for each of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
			es: "Este ataque hace 30 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
			it: "Questo attacco infligge 30 danni in più per ogni Pokémon nella panchina del tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Pokémon no Banco do seu oponente.",
			de: "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 30 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Dimensional Hand",
			fr: "Main Dimensionnelle",
			es: "Mano Dimensional",
			it: "Mano Dimensionale",
			pt: "Mão Dimensional",
			de: "Dimensionshand"
		},

		effect: {
			en: "This attack can be used even if this Pokémon is on the Bench.",
			fr: "Cette attaque peut être utilisée même si ce Pokémon est sur le Banc.",
			es: "Este ataque se puede usar incluso si este Pokémon está en la Banca.",
			it: "Questo attacco può essere usato anche se questo Pokémon è in panchina.",
			pt: "Este ataque pode ser usado mesmo que este Pokémon esteja no Banco.",
			de: "Diese Attacke kann auch eingesetzt werden, wenn sich dieses Pokémon auf der Bank befindet."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "G",
	illustrator: "Mitsuhiro Arita"
}

export default card