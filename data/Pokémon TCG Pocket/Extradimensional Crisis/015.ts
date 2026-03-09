import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Luxray",
		fr: "Luxray"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [405],
	hp: 130,
	types: ["Lightning"],

	evolveFrom: {
		en: "Luxio"
	},

	description: {
		en: "It can see clearly through walls to track down its\nprey and seek its lost young.",
		fr: "Il est capable de voir à travers les murs pour chasser des proies ou retrouver ses petits s'ils s'égarent."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Intimidating Fang",
			fr: "Croc Intimidant"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, attacks used by your opponent's Active Pokémon do −20 damage.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, les attaques utilisées par le Pokémon Actif de votre adversaire infligent – 20 dégâts."
		}
	}],

	attacks: [{
		name: {
			en: "Electric Ball",
			fr: "Boule de Foudre"
		},

		damage: 90,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card