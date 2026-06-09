import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Golduck",
		fr: "Akwakwak"
	},

	illustrator: "Scav",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [55],
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Psyduck"
	},

	description: {
		en: "When it swims at full speed using its long,\nwebbed limbs, its forehead somehow begins\nto glow.",
		fr: "Quand il nage à vitesse maximale grâce à ses pattes palmées, son front se met à luire pour une raison inconnue."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Aqua Edge",
			fr: "Aqua-Dague"
		},

		damage: 70,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card