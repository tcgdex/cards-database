import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "พัลเดีย โดะโอ",
		id: "Paldean Clodsire"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		th: "เมื่อถูกศัตรูโจมตี หนามหนาจะแทงออกมาจากลำตัวเพื่อตอบโต้ เป็นท่าอันตรายที่ต้องยอมรับความเสี่ยง",
		id: "Clodsire melawan balik dengan mengeluarkan duri tebal dari tubuhnya ketika diserang musuh. Jurus berbahaya yang memerlukan determinasi untuk melukai dirinya sendiri."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "พอยซันเซอร์เคิล",
			id: "Poison Circle"
		},

		effect: {
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ] เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun. Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		},

		damage: 20,
		cost: ["Darkness"]
	}, {
		name: {
			th: "ค้อนขี้โคลน",
			id: "Palu Berlumpur"
		},

		effect: {
			th: "ทิ้งการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด",
			id: "Buang 1 kartu dari atas Deck lawan ke Trash."
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