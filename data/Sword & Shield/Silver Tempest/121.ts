import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Ferroseed",
		fr: "Grindur",
		es: "Ferroseed",
		it: "Ferroseed",
		pt: "Ferroseed",
		de: "Kastadur"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 10
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
			es: "Placaje Giro",
			it: "Rollazione",
			pt: "Golpe de Colisão Rolante",
			de: "Rolltackle"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card