import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Swablu",
		'th-th': "ทิลท์โท"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		'id-id': "Swablu sifatnya tidak akan tenang jika dirinya dan sekitarnya tidak bersih. Pokémon ini akan membersihkan kotoran yang ia temukan menggunakan sayapnya.",
		'th-th': "ถ้าตัวเองและรอบข้างไม่สะอาดจะรู้สึกกระสับกระส่าย พอเจอสิ่ง สกปรกจะใช้ปีกเช็ด"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Charm Voice",
			'th-th': "เสียงทรงเสน่ห์"
		},

		effect: {
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing.",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card