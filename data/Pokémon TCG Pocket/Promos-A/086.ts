import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Jolteon",
		es: "Jolteon",
		de: "Blitza"
	},

	illustrator: "Mizue",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [135],
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		en: "Eevee",
		es: "Eevee",
		de: "Evoli"
	},

	description: {
		en: "It concentrates the weak electric charges emitted\nby its cells and launches wicked lightning bolts.",
		es: "Concentra la débil actividad eléctrica de\nsus células para lanzar dañinas descargas.",
		de: "Es sammelt die schwache elektrische Energie, die von seinen Zellen ausgeht, und feuert starke Blitze ab."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Beginning Bolt",
			es: "Descarga de Arranque",
			de: "Startspannung"
		},

		damage: 40,
		cost: ["Lightning"],

		effect: {
			en: "If this Pokémon evolved during this turn, this attack does 20 more damage.",
			es: "Si este Pokémon ha evolucionado durante este turno, este ataque hace 20 puntos de daño más.",
			de: "Wenn sich dieses Pokémon während dieses Zuges entwickelt hat, fügt diese Attacke 20 Schadenspunkte mehr zu."
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