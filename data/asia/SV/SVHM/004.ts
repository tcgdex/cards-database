import { Card } from "models/database/card"
import Set from "../SVHM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵臂膀",
		'th-th': "แขนเหล็ก",
		'id-id': "Iron Hands"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		'zh-tw': "與某本探險記裡記載的一種叫做鐵臂膀的物體 有許多相似處的寶可夢。",
		'th-th': "โปเกมอนที่มีความคล้ายคลึงกับวัตถุที่เรียกว่าแขนเหล็กที่ระบุไว้ในบันทึกการสำรวจเล่มหนึ่งหลายข้อ",
		'id-id': "Pokémon yang memiliki banyak poin kemiripan dengan objek bernama Iron Hands yang tertera dalam sebuah jurnal ekspedisi."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "衝擊波",
			'th-th': "ช็อกเวฟ",
			'id-id': "Shock Wave"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		damage: 30,
		cost: ["Lightning", "Colorless"]
	}, {
		name: {
			'zh-tw': "超合金之手",
			'th-th': "ซูเปอร์อัลลอยแฮนด์",
			'id-id': "Tangan Aloi Super"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【ex】・【V】」，則增加80點傷害。",
			'th-th': "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็น [โปเกมอน【ex】 /【V】] การโจมตีนี้จะเพิ่มแดเมจอีก 80",
			'id-id': "Jika Pokémon Bertarung lawan adalah Pokémon {ex}/{V}, kerusakan yang diberikan bertambah sejumlah 80."
		},

		damage: "80+",
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card