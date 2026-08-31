import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Greedent",
		es: "Greedent",
		de: "Schlaraffel"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [820],
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		en: "Skwovet",
		es: "Skwovet",
		de: "Raffel"
	},

	description: {
		en: "This Pokémon makes off with heaps of fallen berries by wrapping\nthem in its tail, which is roughly twice the length of its body.",
		es: "Su cola es el doble de larga que su cuerpo.\nEnvuelve con ella las bayas que tira de los\nárboles para llevárselas consigo.",
		de: "Sein Schweif ist etwa doppelt so lang wie sein Körper. Es umwickelt damit von Bäumen gefallene Beeren und trägt sie mit sich fort."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Enhanced Fang",
			es: "Incisivos Mejorados",
			de: "Spezial-Zahn"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "If this Pokémon has a Pokémon Tool attached, this attack does 50 more damage.",
			es: "Si este Pokémon tiene 1 Herramienta Pokémon unida a él, este ataque hace 50 puntos de daño más.",
			de: "Wenn an dieses Pokémon 1 Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 50 Schadenspunkte mehr zu."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card