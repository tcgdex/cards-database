import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Crocalor",
		fr: "Crocogril",
		de: "Lokroko",
		it: "Crocalor",
		es: "Crocalor",
		pt: "Crocalor"
	},

	illustrator: "kantaro",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Bite",
			fr: "Morsure",
			de: "Biss",
			it: "Morso",
			es: "Mordisco",
			pt: "Mordida"
		},

		damage: 50
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
			de: "Rolltackle",
			it: "Rollazione",
			es: "Placaje Giro",
			pt: "Golpe de Colisão Rolante"
		},

		damage: 100
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card