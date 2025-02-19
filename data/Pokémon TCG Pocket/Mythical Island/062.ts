import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Chatot"
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "It mimics the cries of other Pokémon to trick them into thinking it's one of them. This way they won't attack it."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Mimic"
		},

		cost: ["Colorless"],

		effect: {
			en: "Shuffle your hand into your deck. Draw a card for each card in your opponent's hand."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
