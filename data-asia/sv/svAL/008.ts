import { Card } from "../../../interfaces"
import Set from "../svAL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洛托姆",
		th: "โรตอม",
		id: "Rotom"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "被當作驅動特殊馬達的動力源， 而被長期研究的寶可夢。",
		th: "เป็นโปเกมอนที่ถูกวิจัยมายาวนานในฐานะแหล่งพลังงานขับเคลื่อนมอเตอร์พิเศษ",
		id: "Rotom adalah Pokémon yang telah diteliti dalam jangka waktu panjang sebagai sumber tenaga penggerak motor khusus."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "直擊彈",
			th: "ยิงตรง",
			id: "Serangan Linear"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢受到20點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "ทำแดเมจ 20 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			id: "Serangan ini memberikan kerusakan sejumlah 20 kepada 1 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card