import { Card } from "models/database/card"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "イーブイ",
		'zh-tw': "伊布",
		'th-th': "อีวุย"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [133],
	hp: 70,
	types: ["Colorless"],

	description: {
		'ja-jp': "環境の 変化に すぐさま 合わせられるよう いくつもの 進化の 可能性を 秘めている。",
		'zh-tw': "為了能瞬即適應環境的變化，這種寶可夢蘊含著許多種進化的可能性。",
		'th-th': "มีความสามารถพิเศษในการวิวัฒนาการอย่างหลากหลายเพื่อปรับตัวให้เข้ากับการเปลี่ยนแปลงของสิ่งแวดล้อมได้อย่างทันที"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "おうえん",
			'zh-tw': "加油",
			'th-th': "เชียร์"
		},

		effect: {
			'ja-jp': "自分の手札からエネルギーを1枚選び、自分のポケモンにつける。",
			'zh-tw': "從自己的手牌選擇1張能量卡，附於自己的寶可夢身上。",
			'th-th': "เลือกการ์ดพลังงาน 1 ใบจากบนมือฝ่ายเรา ติดที่โปเกมอนฝ่ายเรา"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "キック",
			'zh-tw': "踢",
			'th-th': "เตะ"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 724045,
				tcgplayer: 567045,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card