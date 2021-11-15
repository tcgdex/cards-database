import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Turtonator",
		fr: "Boumata",
		es: "Turtonator",
		it: "Turtonator",
		pt: "Turtonator",
		de: "Tortunator"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	stage: "Basic",
	retreat: 3,
	regulationMark: "E",
	illustrator: "Ryuta Fuse",

	description: {
		en: "Eating sulfur in its volcanic habitat is what causes explosive compounds to develop in its shell. Its droppings are also dangerously explosive."
	},

	attacks: [{
		cost: ["Fire", "Fighting"],

		name: {
			en: "Shell Trap"
		},

		damage: 30,

		effect: {
			en: "During your opponent's next turn, if this Pokémon is damaged by an attack (even if it is Knocked Out), put 8 damage counters on the Attacking Pokémon."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Heat Crash"
		},

		damage: 80
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card