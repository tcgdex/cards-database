import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Phanpy",
		fr: "Phanpy",
		es: "Phanpy",
		it: "Phanpy",
		pt: "Phanpy"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Strength",
			fr: "Force",
			es: "Fuerza",
			it: "Forza",
			pt: "Força"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
			es: "Placaje Giro",
			it: "Rollazione",
			pt: "Golpe de Colisão Rolante"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card