import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "พัลเดีย อูปา",
		id: "Paldean Wooper"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		th: "หลังจากที่แพ้สงครามแย่งชิงอาณาเขตจนต้องมาอาศัยอยู่บนบก ก็ปรับตัวให้มีเมือกพิษปกป้องร่างกาย",
		id: "Membran beracun melindungi tubuh Wooper yang hidup di darat setelah kalah dalam pertarungan perebutan wilayah teritorial."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ของเหลวพิษ",
			id: "Cairan Racun"
		},

		effect: {
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun."
		},

		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card