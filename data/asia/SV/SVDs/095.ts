import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "พัลเดีย โดะโอ",
		'id-id': "Paldean Clodsire"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		'th-th': "เมื่อถูกศัตรูโจมตี หนามหนาจะแทงออกมาจากลำตัวเพื่อตอบโต้ เป็นท่าอันตรายที่ต้องยอมรับความเสี่ยง",
		'id-id': "Clodsire melawan balik dengan mengeluarkan duri tebal dari tubuhnya ketika diserang musuh. Jurus berbahaya yang memerlukan determinasi untuk melukai dirinya sendiri."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "พอยซันเซอร์เคิล",
			'id-id': "Poison Circle"
		},

		effect: {
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ] เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้",
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Racun. Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		},

		damage: 20,
		cost: ["Darkness"]
	}, {
		name: {
			'th-th': "ค้อนขี้โคลน",
			'id-id': "Palu Berlumpur"
		},

		effect: {
			'th-th': "ทิ้งการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Buang 1 kartu dari atas Deck lawan ke Trash."
		},

		damage: 100,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card