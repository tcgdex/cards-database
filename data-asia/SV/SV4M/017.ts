import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "バニプッチ",
		'zh-tw': "迷你冰",
		th: "วานิเพ็ตติ"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [582],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "氷柱から 生まれたと いわれる。 マイナス５０度の 冷気を 吐いて あたりを 凍らせ 棲みやすくする。",
		'zh-tw': "據說牠是從冰柱中誕生的。為了能讓自己生活得更舒適，會吐出零下５０度的冷氣凍住四周。",
		th: "ว่ากันว่าเกิดมาจากแท่งน้ำแข็ง คายไอเย็น -50 องศาออกมาทำให้บริเวณรอบ ๆ เย็นเยือกแข็งเพื่อทำให้ตัวเองอาศัยอยู่ง่ายขึ้น"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "ひんやり",
			'zh-tw': "寒意",
			th: "เย็นยะเยือก"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741844
	}
}

export default card