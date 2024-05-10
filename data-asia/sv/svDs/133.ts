import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "ชิรุชูลู",
		id: "Shroodle"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		th: "มีนิสัยอ่อนโยน แต่ถ้าโกรธขึ้นมาจะใช้ฟันหน้าอันแหลมคมที่ชุ่มไปด้วยพิษกัดและทำให้อีกฝ่ายตัวชา",
		id: "Walaupun ramah, Shroodle akan menggigit dan melumpuhkan siapa pun yang membuatnya marah dengan gigi depan tajam berlumur racun miliknya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ข่วน",
			id: "Menggaruk"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			th: "ฟันหน้าชุ่มพิษ",
			id: "Gigi Beracun"
		},

		effect: {
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun."
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card