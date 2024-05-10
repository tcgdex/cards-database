import { Card } from "../../../interfaces"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ドーミラー",
		'zh-tw': "銅鏡怪",
		th: "โดมิเรอร์",
		id: "Bronzor"
	},

	illustrator: "Shinji Kanda",
	rarity: "Common",
	category: "Pokemon",
	dexId: [436],
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "ドーミラーの 背中の 模様には 神秘的な 力が 宿ると 昔の 人たちは 信じていた。",
		'zh-tw': "過去的人們相信，銅鏡怪背上的花紋裡 蘊藏著神秘的力量。",
		th: "ผู้คนในอดีตเชื่อกันว่าลายที่หลังโดมิเรอร์มีพลังลึกลับซ่อนอยู่",
		id: "Orang-orang dahulu percaya bahwa pola di punggung Bronzor mengandung kekuatan misterius."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "ミラードロー",
			'zh-tw': "鏡面抽出",
			th: "มิเรอร์ดรอว์",
			id: "Mirror Draw"
		},

		effect: {
			ja: "自分の手札が、相手の手札と同じ枚数になるように、山札を引く。",
			'zh-tw': "從牌庫抽卡直到自己的手牌與對手的手牌張數相同為止。",
			th: "จั่วการ์ดจากสำรับการ์ด จนได้การ์ดบนมือฝ่ายเรา เป็นจำนวนเท่ากับการ์ดบนมือฝ่ายตรงข้าม",
			id: "Ambil kartu dari atas Deck hingga jumlah Kartu Pegangan sendiri menjadi sama dengan jumlah Kartu Pegangan lawan."
		}
	}, {
		cost: ["Metal", "Metal"],

		name: {
			ja: "スピードひこう",
			'zh-tw': "高速飛行",
			th: "บินเร็วจี๋",
			id: "Terbang Cepat"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card