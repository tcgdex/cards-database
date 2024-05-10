import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "イダイナキバ",
		'zh-tw': "雄偉牙",
		th: "งายักษ์",
		'zh-cn': "雄偉牙"
	},

	illustrator: "GIDORA",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [984],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "近年 目撃例が ある。 イダイナキバという 名は ある本に 記された 生物から 取られた。",
		'zh-tw': "近年曾經有人目擊到牠。雄偉牙這個名字來自於 某本書裡記載的生物。",
		th: "มีผู้พบเห็นเมื่อไม่กี่ปีที่ผ่านมานี้ ชื่องายักษ์นั้นได้มาจากชื่อของสิ่งมีชีวิตที่ระบุไว้ในหนังสือเล่มหนึ่ง",
		'zh-cn': "近年曾經有人目擊到牠。雄偉牙這個名字來自於 某本書裡記載的生物。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "じばんほうかい",
			'zh-tw': "地盤崩壞",
			th: "พสุธาทลาย",
			'zh-cn': "地盤崩壞"
		},

		effect: {
			ja: "相手の山札を上から1枚トラッシュする。この番、手札から「古代」のサポートを出して使っていたなら、さらに3枚トラッシュする。",
			'zh-tw': "將對手的牌庫上方1張卡丟棄。在這個回合，若從手牌使出了「古代」支援者卡，則再丟棄3張。",
			th: "ทิ้งการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด เทิร์นนี้ ถ้านำการ์ดซัพพอร์ต [โบราณ] จากบนมือออกมาใช้แล้ว จะทิ้งการ์ดเพิ่มได้ 3 ใบที่ตำแหน่งทิ้งการ์ด",
			'zh-cn': "將對手的牌庫上方1張卡丟棄。在這個回合，若從手牌使出了「古代」支援者卡，則再丟棄3張。"
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"],

		name: {
			ja: "きょだいなキバ",
			'zh-tw': "巨大之牙",
			th: "เขี้ยวมหึมา",
			'zh-cn': "巨大之牙"
		},

		damage: 160
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card