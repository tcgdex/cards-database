import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Audino",
		es: "Audino"
	},

	illustrator: "MAHOU",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		en: "This Pokémon has a kind heart. By touching with its feelers,\nAudino can gauge other creatures' feelings and physical conditions.",
		es: "Un Pokémon gentil que es capaz de comprender\nlos sentimientos y averiguar el estado de salud\nde todo aquel que toque con sus antenas."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Drain Slap",
			es: "Absorbebofetón"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Heal 10 damage from this Pokémon.",
			es: "Cura 10 puntos de daño a este Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["vol10"]
}

export default card