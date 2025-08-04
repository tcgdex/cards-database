import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Jolteon",
		es: "Jolteon"
	},

	illustrator: "Mizue",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		en: "Eevee",
		es: "Eevee"
	},

	description: {
		en: "It concentrates the weak electric charges emitted\nby its cells and launches wicked lightning bolts.",
		es: "Concentra la débil actividad eléctrica de\nsus células para lanzar dañinas descargas."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Beginning Bolt",
			es: "Descarga de Arranque"
		},

		damage: 40,
		cost: ["Lightning"],

		effect: {
			en: "If this Pokémon evolved during this turn, this attack does 20 more damage.",
			es: "Si este Pokémon ha evolucionado durante este turno, este ataque hace 20 puntos de daño más."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["vol10"]
}

export default card