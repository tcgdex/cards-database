import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤジロン",
		'zh-tw': "天秤偶",
		th: "ยาจิลอน"
	},

	illustrator: "Scav",
	rarity: "Common",
	category: "Pokemon",
	dexId: [343],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "古代 遺跡で 発見された。 回転 しながら 移動。 夜 眠る ときも 一本足だ。",
		'zh-tw': "在古代遺跡被發現。會一邊旋轉一邊移動。晚上睡覺的時候也是單腳站著。",
		th: "ถูกค้นพบในซากโบราณสถาน เคลื่อนตัวไปพร้อม ๆ กับหมุนตัว แม้เวลานอนตอนกลางคืนก็ยืนด้วยขาข้างเดียว"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "こうそくスピン",
			'zh-tw': "高速旋轉",
			th: "หมุนติ้ว"
		},

		damage: 10,

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。その後、相手は相手自身のバトルポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。然後，對手將對手自己的戰鬥寶可夢與備戰寶可夢互換。",
			th: "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์ หลังจากนั้น ฝ่ายตรงข้ามสลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเองกับโปเกมอนบนเบนช์"
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

	retreat: 2,
	regulationMark: "G"
}

export default card