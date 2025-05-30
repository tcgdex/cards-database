import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Cetitan",
		fr: "Balbalèze",
		de: "Kolowal",
		it: "Cetitan",
		es: "Cetitan",
		pt: "Cetitan"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			de: "Einhämmern",
			it: "Martello",
			es: "Martillear",
			pt: "Martelada"
		},

		damage: 50
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Sweeping Tackle",
			fr: "Charge Balayante",
			de: "Fege-Tackle",
			it: "Spazzazione",
			es: "Placaje Barrido",
			pt: "Investida Esmagadora"
		},

		effect: {
			en: "This attack does 20 less damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts de moins pour chaque marqueur de dégâts sur ce Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 20 Schadenspunkte weniger zu.",
			it: "Questo attacco infligge 20 danni in meno per ogni segnalino danno presente su questo Pokémon.",
			es: "Este ataque hace 20 puntos de daño menos por cada contador de daño en este Pokémon.",
			pt: "Este ataque causa 20 pontos de dano a menos para cada contador de dano neste Pokémon."
		},

		damage: "200-"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card