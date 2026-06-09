import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "圓法師",
		th: "โคโรโบชิ",
		ja: "コロボーシ"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "觸角之間互相碰撞時，會叮叮咚咚地奏出 如同木琴一般的音色。",
		th: "เมื่อหนวดมากระทบกัน ก็จะเกิดโทนเสียงที่คล้ายกับเสียงระนาดฝรั่ง",
		ja: "触角 同士が ぶつかると コロン コロンと 木琴に 似た 音色を 奏でる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "打滾",
			th: "ล้มกลิ้ง",
			ja: "ころばす"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			th: "ทอยเหรียญ 1 ครั้ง ถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 20",
			ja: "コインを1回投げオモテなら、20ダメージ追加。"
		},

		damage: "10＋",
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [401],

	thirdParty: {
		cardmarket: 687489
	}
}

export default card