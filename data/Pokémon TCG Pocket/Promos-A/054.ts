import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Pawmot"
	},

	illustrator: "REND",
	rarity: "None",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		en: "This Pokémon normally is slow to react, but once it enters battle, it will strike down its enemies with lightning-fast movements."
	},

	stage: "Stage2",

	evolveFrom: {
		en: "Pawmo"
	},

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 0
}

export default card
