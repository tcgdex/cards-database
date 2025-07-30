import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Cetitan",
		fr: "Balbalèze",
		es: "Cetitan",
		it: "Cetitan",
		pt: "Cetitan",
		de: "Kolowal"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	evolveFrom: {
		en: "Cetoddle"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			it: "Martello",
			pt: "Martelada",
			de: "Einhämmern"
		},

		damage: 50
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Sweeping Tackle",
			fr: "Charge Balayante",
			es: "Placaje Barrido",
			it: "Spazzazione",
			pt: "Investida Esmagadora",
			de: "Fege-Tackle"
		},

		effect: {
			en: "This attack does 20 less damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts de moins pour chaque marqueur de dégâts sur ce Pokémon.",
			es: "Este ataque hace 20 puntos de daño menos por cada contador de daño en este Pokémon.",
			it: "Questo attacco infligge 20 danni in meno per ogni segnalino danno presente su questo Pokémon.",
			pt: "Este ataque causa 20 pontos de dano a menos para cada contador de dano neste Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 20 Schadenspunkte weniger zu."
		},

		damage: "200-"
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Anesaki Dynamic",

	thirdParty: {
		cardmarket: 702355
	}
}

export default card