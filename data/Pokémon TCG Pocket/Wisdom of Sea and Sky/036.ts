import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Darmanitan",
		fr: "Darumacho"
	},

	illustrator: "Naoki Saito",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		en: "Darumaka"
	},

	description: {
		en: "The thick arms of this hot-blooded Pokémon\ncan deliver punches capable of obliterating a\ndump truck.",
		fr: "Véritable tête brûlée, il possède assez de force dans ses gros bras pour réduire en poussière un camion-benne à coups de poing."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Heat Blast",
			fr: "Explosion de Chaleur"
		},

		damage: 70,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh", "lugia"]
}

export default card