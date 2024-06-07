import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "夢幻V",
		th: "มิวV",
		ja: "ミュウV"
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "能量混和",
			th: "เอนเนอร์จีมิกซ์",
			ja: "エナジーミックス"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張能量卡，附於自己的「匯流」寶可夢身上。並且重洗牌庫。",
			th: "เลือกการ์ดพลังงาน 1 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอน ฝ่ายเรา แล้วสับสำรับการ์ด",
			ja: "自分の山札からエネルギーを1枚選び、自分の「フュージョン」のポケモンにつける。そして山札を切る。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "精神之跳",
			th: "ไซโคจัมป์",
			ja: "サイコジャンプ"
		},

		effect: {
			'zh-tw': "若希望，將這隻寶可夢與附加的卡，全部放回自己的牌庫並重洗。",
			th: "หากต้องการ นำการ์ดโปเกมอนนี้และการ์ดทั้งหมดที่ติดอยู่ ใส่กลับไปในสำรับการ์ดฝ่ายเราแล้วสับ",
			ja: "のぞむなら、このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。"
		},

		damage: 70,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 0,
	regulationMark: "E",
	rarity: "Double rare"
}

export default card