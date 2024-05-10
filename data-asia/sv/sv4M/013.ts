import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒンバス",
		'zh-tw': "醜醜魚",
		th: "ฮินบาส"
	},

	illustrator: "Tetsu Kayama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [349],
	hp: 30,
	types: ["Water"],

	description: {
		ja: "みすぼらしく 醜い ポケモンだが しぶとい 生命力を もち わずかな 水だけでも 生き延びる。",
		'zh-tw': "雖然看起來弱小又醜陋，但擁有頑強的生命力，只要少量的水就能存活。",
		th: "เป็นโปเกมอนที่ดูมอมแมม น่าเกลียดแต่ทนทรหด มีพลังในการดำรงชีวิตอยู่รอดได้แม้จะมีน้ำเพียงเล็กน้อย"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ドローアップ",
			'zh-tw': "抽上",
			th: "ดรอว์อัป"
		},

		effect: {
			ja: "自分の山札からエネルギーを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張能量卡，在給對手看過後加入手牌。並且重洗牌庫。",
			th: "เลือกการ์ดพลังงาน 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card