import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "爆香猿V",
		th: "บาอกกีV",
		ja: "バオッキーV"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "力量濺射",
			th: "พลังระเบิด",
			ja: "はじけるちから"
		},

		effect: {
			'zh-tw': "若希望，從自己的手牌選擇最多2張基本能量卡，以任意方式附於自己的寶可夢身上。",
			th: "หากต้องการ เลือกการ์ดพลังงานพื้นฐานได้สูงสุด 2 ใบจากบนมือฝ่ายเรา ติดที่โปเกมอนฝ่ายเราตามชอบ",
			ja: "のぞむなら、自分の手札から基本エネルギーを2枚まで選び、自分のポケモンに好きなようにつける。"
		},

		damage: 20,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "閃焰漏接",
			th: "จักกลิ้งบอลไฟ",
			ja: "フレアファンブル"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x30",
			ja: "相手のバトルポケモンについているエネルギーの数×30ダメージ追加。"
		},

		damage: "90＋",
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Double rare"
}

export default card