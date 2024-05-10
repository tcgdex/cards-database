import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "バニプッチ",
		'zh-tw': "迷你冰"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [582],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "氷柱から 生まれたと いわれる。 マイナス５０度の 冷気を 吐いて あたりを 凍らせ 棲みやすくする。",
		'zh-tw': "據說牠是從冰柱中誕生的。為了能讓自己生活得更舒適，會吐出零下５０度的冷氣凍住四周。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "ひんやり",
			'zh-tw': "寒意"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card