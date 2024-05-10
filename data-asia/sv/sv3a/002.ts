import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ラプラス",
		'zh-tw': "拉普拉斯",
		th: "ลาพลาซ"
	},

	illustrator: "Gemi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [131],
	hp: 110,
	types: ["Water"],

	description: {
		ja: "寒さに 強く 氷の 海も 平気。 皮膚は スベスベで 少しだけ ひんやり しているよ。",
		'zh-tw': "十分耐寒，不畏冰海。皮膚滑滑的， 摸起來會有點涼。",
		th: "ทนทานความหนาวเย็นแม้ทะเลน้ำแข็งก็ไม่เป็นไร ผิวหนังเรียบลื่นทำให้รู้สึกเย็นเล็กน้อย"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ふかもぐり",
			'zh-tw': "深潛",
			th: "ดำน้ำลึก"
		},

		effect: {
			ja: "自分のトラッシュから基本エネルギーを3枚まで選び、相手に見せて、手札に加える。",
			'zh-tw': "從自己的棄牌區選擇最多3張基本能量卡，在給對手看過後加入手牌。",
			th: "เลือกการ์ดพลังงานพื้นฐานได้สูงสุด 3 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ"
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "フリーズドライ",
			'zh-tw': "冷凍乾燥",
			th: "ฟรีซดราย"
		},

		damage: 50,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card