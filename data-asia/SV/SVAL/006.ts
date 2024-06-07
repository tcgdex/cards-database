import { Card } from "../../../interfaces"
import Set from "../SVAL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "茸茸羊",
		th: "โมโคโค",
		id: "Flaaffy"
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'zh-tw': "如同橡膠般光滑的皮膚雖不導電， 但體毛卻很容易蓄電。",
		th: "ผิวที่ไม่นำไฟฟ้านั้นเนียนลื่นเหมือนยาง แต่ขนนุ่มฟูสะสมไฟฟ้าได้ง่าย",
		id: "Kulit Flaaffy yang tidak menghantarkan listrik licin seperti karet, namun bulunya menyimpan banyak listrik."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "電擊",
			th: "ช็อคไฟฟ้า",
			id: "Sengatan Listrik"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		damage: 20,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "電球",
			th: "อิเล็กทริกบอล",
			id: "Electro Ball"
		},

		damage: 60,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card