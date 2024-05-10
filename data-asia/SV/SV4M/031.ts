import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒラヒナ",
		'zh-tw': "飄飄雛",
		th: "ฮิราฮินะ"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	dexId: [955],
	hp: 40,
	types: ["Psychic"],

	description: {
		ja: "荒れ地を 走りまわって 暮らす。 大好きな 木の実を 取られると 追いかけまわして 復讐する。",
		'zh-tw': "會在荒地跑來跑去生活。如果最喜歡的樹果被搶走，就會窮追不捨地展開報復。",
		th: "ใช้ชีวิตโดยวิ่งวนไปมาในดินแดนรกร้าง หากโดนแย่งผลไม้โปรดไปจะไล่ตามเพื่อล้างแค้น"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "でんこうせっか",
			'zh-tw': "電光一閃",
			th: "เคลื่อนที่ความไวแสง"
		},

		damage: "10+",

		effect: {
			ja: "コインを1回投げオモテなら、20ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 20"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card