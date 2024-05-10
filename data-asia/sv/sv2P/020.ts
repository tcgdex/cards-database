import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "アルクジラ",
		'zh-tw': "走鯨",
		th: "อารุคุจิระ",
		id: "Cetoddle"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	dexId: [974],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "遥か 昔に 海から 上がって 陸地で 暮らすようになった。 ホエルコに 近い 種類らしい。",
		'zh-tw': "遠古時代自大海上岸後，就開始在陸地上生活。 似乎與吼吼鯨是相近的物種。",
		th: "ขึ้นจากทะเลมาอาศัยอยู่บนบกตั้งแต่อดีตอันไกลโพ้น ดูเหมือนว่าจะเป็นสายพันธุ์ใกล้เคียงกับเวลโกะ",
		id: "Pada zaman dahulu, Cetoddle naik dari laut dan hidup di daratan. Tampaknya spesies Pokémon ini dekat dengan Wailmer."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "ゆきなだれ",
			'zh-tw': "雪崩",
			th: "หิมะถล่ม",
			id: "Longsoran Salju"
		},

		damage: 30,

		effect: {
			ja: "相手のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的所有備戰寶可夢也各受到10點傷害。 [在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนบนเบนช์ฝ่ายตรงข้ามทุกตัว ก็จะได้รับแดเมจตัวละ 10 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			id: "Serangan ini juga memberikan kerusakan masing-masing sejumlah 10 kepada semua Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card