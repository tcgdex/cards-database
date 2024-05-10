import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "イーブイ",
		'zh-tw': "伊布",
		th: "อีวุย"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [133],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "環境の 変化に すぐさま 合わせられるよう いくつもの 進化の 可能性を 秘めている。",
		'zh-tw': "為了能瞬即適應環境的變化，這種寶可夢蘊含著許多種進化的可能性。",
		th: "มีความสามารถพิเศษในการวิวัฒนาการอย่างหลากหลายเพื่อปรับตัวให้เข้ากับการเปลี่ยนแปลงของสิ่งแวดล้อมได้อย่างทันที"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "おうえん",
			'zh-tw': "加油",
			th: "เชียร์"
		},

		effect: {
			ja: "自分の手札からエネルギーを1枚選び、自分のポケモンにつける。",
			'zh-tw': "從自己的手牌選擇1張能量卡，附於自己的寶可夢身上。",
			th: "เลือกการ์ดพลังงาน 1 ใบจากบนมือฝ่ายเรา ติดที่โปเกมอนฝ่ายเรา"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "キック",
			'zh-tw': "踢",
			th: "เตะ"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card