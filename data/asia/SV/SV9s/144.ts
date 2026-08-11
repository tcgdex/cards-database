import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "คามิสึโอโรจิ",
		id: "Hydrapple"
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 170,
	types: ["Grass"],

	description: {
		th: "งาคาทั้ง 7 ตัวอาศัยอยู่ในแอปเปิลที่ทำจากน้ำหวาน งาคาตัวที่อยู่ ตรงกลางคือผู้บัญชาการ"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			th: "โอโรจิเบรธ",
			id: "Hydra Breath"
		},

		effect: {
			th: "ทิ้งการ์ด [พลังงานพื้นฐาน[หญ้า]] 6 ใบจากบนมือฝ่ายเราที่ตำแหน่งทิ้งการ์ด ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม[หมดสภาพ] ถ้าทิ้งการ์ด 6 ใบไม่ได้ ท่าต่อสู้นี้จะล้มเหลว",
			id: "Buang 6 lembar Energi Dasar {Daun} dari Kartu Pegangan sendiri ke Trash, Pokémon Bertarung lawan KO. Jika tidak dapat membuang 6 lembar ke Trash, serangan ini gagal."
		},

		cost: ["Grass"]
	}, {
		name: {
			th: "วิปสแมช",
			id: "Whip Smash"
		},

		damage: 140,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card