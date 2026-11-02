import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Pincurchin"
	},

	illustrator: "Tetsu Kayama",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [871],
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Energy Crush"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			en: "This attack does 20 damage for each Energy attached to all of your opponent's Pokémon."
		},

		damage: "20×"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	description: {
		en: "This Pokémon is so timid that even brushing against seaweed will make it discharge electricity in surprise. Its lips do not conduct electricity."
	},

	variants: [
		{ type: "holo" }
	],
}

export default card
