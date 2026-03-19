import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "アメモース",
		'zh-tw': "雨翅蛾",
		th: "อาเมมอธ"
	},

	illustrator: "kantaro",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [284],
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "雨に 濡れると 特徴的な 目玉模様の 触角が 重くなり 飛べなくなって しまう。",
		'zh-tw': "一旦被雨淋濕，獨特的眼珠花紋觸角就會變重，使牠連飛都飛不起來。",
		th: "ถ้าเปียกฝน หนวดที่มีลักษณะพิเศษเหมือนรูปดวงตาจะหนักจนบินไม่ไหว"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "いあつのひとみ",
			'zh-tw': "威迫之瞳",
			th: "ดวงตาขู่ขวัญ"
		},

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数ぶん、相手のバトルポケモンについているエネルギーを選び、相手の山札にもどして切る。",
			'zh-tw': "擲硬幣直到出現反面，選擇與正面出現的次數相同數量的對手的戰鬥寶可夢身上附加的能量，放回對手的牌庫並重洗。",
			th: "ทอยเหรียญจนกว่าจะออกก้อย เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม ตามจำนวนครั้งที่ออกหัว ใส่กลับไปในสำรับการ์ดฝ่ายตรงข้ามแล้วสับ"
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "カッターウインド",
			'zh-tw': "利刃之風",
			th: "คัตเตอร์วินด์"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741813
	}
}

export default card