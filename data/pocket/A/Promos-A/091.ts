import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Greedent",
		'es-es': "Greedent"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [820],
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Skwovet",
		'es-es': "Skwovet"
	},

	description: {
		'en-us': "This Pokémon makes off with heaps of fallen berries by wrapping\nthem in its tail, which is roughly twice the length of its body.",
		'es-es': "Su cola es el doble de larga que su cuerpo.\nEnvuelve con ella las bayas que tira de los\nárboles para llevárselas consigo."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Enhanced Fang",
			'es-es': "Incisivos Mejorados"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "If this Pokémon has a Pokémon Tool attached, this attack does 50 more damage.",
			'es-es': "Si este Pokémon tiene 1 Herramienta Pokémon unida a él, este ataque hace 50 puntos de daño más."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card