import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Mankey",
		fr: "Férosinge"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [56],
	hp: 50,
	types: ["Fighting"],

	description: {
		en: "It lives in groups in the treetops. If it loses sight of\nits group, it becomes infuriated by its loneliness.",
		fr: "Il vit en groupe au sommet des arbres. S'il perd ses congénères de vue, la solitude le rend furieux."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Focus Fist",
			fr: "Poing Concentré"
		},

		damage: 50,
		cost: ["Fighting"],

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card