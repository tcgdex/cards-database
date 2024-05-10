import { Card } from "../../../interfaces"
import Set from "../svHM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵武者",
		th: "นักรบเหล็ก",
		id: "Iron Valiant"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'zh-tw': "牠有可能就是在某本探險記裡，以鐵武者這個 名字被記載下來的物體。",
		th: "มีโอกาสที่จะเป็นวัตถุที่เรียกว่านักรบเหล็กซึ่งระบุไว้ในบันทึกการสำรวจเล่มหนึ่ง",
		id: "Terdapat kemungkinan bahwa Pokémon ini adalah objek misterius bernama Iron Valiant yang tertera dalam suatu jurnal ekspedisi."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "雙生鐳射",
			th: "เจมิไนเลเซอร์",
			id: "Gemini Laser"
		},

		effect: {
			'zh-tw': "對手的1隻備戰寶可夢也受到20點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ก็จะได้รับแดเมจ 20 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			id: "Serangan ini juga memberikan kerusakan sejumlah 20 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "意念之刃",
			th: "คมดาบพลังจิต",
			id: "Pisau Spiritual"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「意念之刃」。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [คมดาบพลังจิต] ไม่ได้",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan Pisau Spiritual."
		},

		damage: 120,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card