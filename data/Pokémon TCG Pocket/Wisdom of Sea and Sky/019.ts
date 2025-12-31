import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Yanmega",
		fr: "Yanmega"
	},

	illustrator: "Uta",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Yanma"
	},

	description: {
		en: "It prefers to battle by biting apart foes' heads\ninstantly while flying by at high speed.",
		fr: "Il excelle dans l'art de mordre ses ennemis en plein vol, et à grande vitesse."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Bug Buzz",
			fr: "Bourdon"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh", "lugia"]
}

export default card