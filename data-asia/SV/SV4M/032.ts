import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒラヒナ",
		'zh-tw': "飄飄雛",
		th: "ฮิราฮินะ"
	},

	illustrator: "kodama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [955],
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "荒れ地を 走りまわって 暮らす。 大好きな 木の実を 取られると 追いかけまわして 復讐する。",
		'zh-tw': "會在荒地跑來跑去生活。如果最喜歡的樹果被搶走，就會窮追不捨地展開報復。",
		th: "ใช้ชีวิตโดยวิ่งวนไปมาในดินแดนรกร้าง หากโดนแย่งผลไม้โปรดไปจะไล่ตามเพื่อล้างแค้น"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "サイコキネシス",
			'zh-tw': "精神強念",
			th: "ไซโคคิเนซิส"
		},

		damage: "10+",

		effect: {
			ja: "相手のバトルポケモンについているエネルギーの数×10ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×10點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x10"
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