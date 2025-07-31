import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Aipom"
	},

	illustrator: "Naoyo Kimura",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		en: "As it did more and more with its tail, its hands\nbecame clumsy. It makes its nest high in\nthe treetops."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Imitate"
		},

		cost: ["Colorless"],

		effect: {
			en: "Draw cards until you have the same number of cards in your hand as your opponent."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card