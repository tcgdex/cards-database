import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Zeraora",
		es: "Zeraora"
	},

	illustrator: "GIDORA",
	rarity: "One Star",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		en: "It electrifies its claws and tears its opponents\napart with them. Even if they dodge its attack,\nthey'll be electrocuted by the flying sparks.",
		//es: "Se comunican con sus compañeros chocando los\npicos. El número de veces y la fuerza con la que\nlo hacen transmiten sus distintos sentimientos."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Thunderclap Flash",
			//es: 
		},

		effect: {
			en: "At the end of your first turn, take a {L} Energy from your Energy Zone and attach it to this Pokémon."
			//es: 
		}
	}],

	attacks: [{
		name: {
			en: "Lightning Claw"
			//es: 
		},

		damage: 50,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card