import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Shroomish",
		fr: "Balignon",
		de: "Knilz",
		it: "Shroomish",
		es: "Shroomish",
		pt: "Shroomish"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
			de: "Rolltackle",
			it: "Rollazione",
			es: "Placaje Giro",
			pt: "Golpe de Colisão Rolante"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card