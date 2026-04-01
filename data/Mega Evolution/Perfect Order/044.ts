import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Tyrunt",
		fr: "Ptyranidur",
		es: "Tyrunt",
		'es-mx': "Tyrunt",
		de: "Balgoras",
		it: "Tyrunt",
		pt: "Tyrunt"
	},

	illustrator: "Tomomi Kaneko",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Get Angry",
			fr: "Coléreux",
			es: "Enfadarse",
			'es-mx': "Enojarse",
			de: "Rotsehen",
			it: "Tutte le Furie",
			pt: "Dar Piti"
		},

		effect: {
			en: "This attack does 20 damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			es: "Este ataque hace 20 puntos de daño por cada contador de daño en este Pokémon.",
			'es-mx': "Este ataque hace 20 puntos de daño por cada contador de daño en este Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 20 Schadenspunkte zu.",
			it: "Questo attacco infligge 20 danni per ogni segnalino danno presente su questo Pokémon.",
			pt: "Este ataque causa 20 pontos de dano para cada contador de dano neste Pokémon."
		},

		damage: "20×"
	}],

	retreat: 3,
	regulationMark: "J"
}

export default card