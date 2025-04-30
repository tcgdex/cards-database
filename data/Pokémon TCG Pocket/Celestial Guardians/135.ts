import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Toucannon"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		en: "Trumbeak"
	},

	description: {
		en: "They smack beaks with others of their kind to communicate. The strength and number of hits tell each other how they feel."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Drill Peck"
		},

		damage: 70,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card