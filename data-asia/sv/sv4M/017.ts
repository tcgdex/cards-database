import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "バニプッチ"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [582],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "氷柱から 生まれたと いわれる。 マイナス５０度の 冷気を 吐いて あたりを 凍らせ 棲みやすくする。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "ひんやり"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card