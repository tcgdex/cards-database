import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Servine"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Snivy"
	},

	description: {
		en: "It moves along the ground as if sliding. Its swift movements befuddle its foes, and it then attacks with a vine whip."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Vine Whip"
		},

		damage: 50,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond"
}

export default card
