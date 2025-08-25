import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Greedent",
		es: "Greedent"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		en: "Skwovet",
		es: "Skwovet"
	},

	description: {
		en: "This Pokémon makes off with heaps of fallen berries by wrapping\nthem in its tail, which is roughly twice the length of its body.",
		es: "Su cola es el doble de larga que su cuerpo.\nEnvuelve con ella las bayas que tira de los\nárboles para llevárselas consigo."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Enhanced Fang",
			es: "Incisivos Mejorados"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "If this Pokémon has a Pokémon Tool attached, this attack does 50 more damage.",
			es: "Si este Pokémon tiene 1 Herramienta Pokémon unida a él, este ataque hace 50 puntos de daño más."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card