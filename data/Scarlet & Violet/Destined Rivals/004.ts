import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Pineco",
		fr: "Pomdepik",
		de: "Tannza",
		it: "Pineco",
		es: "Pineco",
		pt: "Pineco",
		'es-mx': "Pineco"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Hang Down",
			fr: "Suspension",
			de: "Herunterhängen",
			it: "Tirar Giù",
			es: "Prender",
			pt: "Dependurar",
			'es-mx': "Colgadera"
		},

		damage: 10
	}],

	retreat: 2,
	regulationMark: "I",

	variants: {
		normal: true,
		reverse: true,
	},

	variants_detailed: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
