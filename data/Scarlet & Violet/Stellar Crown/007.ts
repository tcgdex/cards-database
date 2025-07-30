import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Carnivine",
		fr: "Vortente",
		es: "Carnivine",
		it: "Carnivine",
		pt: "Carnivine",
		de: "Venuflibis"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Nosh",
			fr: "Casse-Croûte",
			es: "Piscolabis",
			it: "Spuntino",
			pt: "Mordiscar",
			de: "Snack"
		},

		effect: {
			en: "Heal 40 damage from this Pokémon.",
			fr: "Soignez 40 dégâts de ce Pokémon.",
			es: "Cura 40 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 40 danni.",
			pt: "Cure 40 pontos de dano deste Pokémon.",
			de: "Heile 40 Schadenspunkte bei diesem Pokémon."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Loom Over",
			fr: "Menacer",
			es: "Cernirse",
			it: "Presenza Minacciosa",
			pt: "Pairar Sobre",
			de: "Schattenseite"
		},

		effect: {
			en: "This attack does 10 less damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts de moins pour chaque marqueur de dégâts sur ce Pokémon.",
			es: "Este ataque hace 10 puntos de daño menos por cada contador de daño en este Pokémon.",
			it: "Questo attacco infligge 10 danni in meno per ogni segnalino danno presente su questo Pokémon.",
			pt: "Este ataque causa 10 pontos de dano a menos para cada contador de dano neste Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte weniger zu."
		},

		damage: "130-"
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Mousho",

	thirdParty: {
		cardmarket: 785860
	}
}

export default card
