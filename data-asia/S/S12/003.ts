import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "美麗花",
		th: "คิเรอิฮานะ",
		ja: "キレイハナ"
	},

	illustrator: "Nagomi Nijo",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "在南國大量生活著。跳舞時花瓣會互相碰觸， 發出悅耳的聲音。",
		th: "อาศัยอยู่เป็นจำนวนมากในประเทศทางแถบตอนใต้ เวลาเต้นรำกลีบดอกไม้จะสัมผัสกันเกิดเป็นเสียงก้องกังวานที่ฟังแล้วสบายใจ",
		ja: "南国に 多く 生息する。 踊るとき 花びらが 触れあい 心地よい 音が 鳴り響く。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "鮮花旋轉",
			th: "ฟลาวเวอร์สปิน",
			ja: "フラワースピン"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×80點傷害。將這隻寶可夢與備戰寶可夢互換。",
			th: "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x80 สลับโปเกมอนนี้กับโปเกมอนบนเบนช์",
			ja: "コインを3回投げ、オモテの数×80ダメージ。このポケモンをベンチポケモンと入れ替える。"
		},

		damage: "80×",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [182]
}

export default card