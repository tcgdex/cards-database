import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Tinkaton ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	evolveFrom: {
		en: "Tinkatuff"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Terrific Thumping"
		},

		damage: "80+",
		cost: ["Metal", "Metal", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, this attack does 80 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card