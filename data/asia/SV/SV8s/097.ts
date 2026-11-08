import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Annihilape",
		'th-th': "โคโนะโยซารุ"
	},

	illustrator: "SIE NANAHARA",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		'id-id': "Annihilape mengerahkan kekuatan amarah yang tersembunyi di dalam hati ke tinjunya, lalu memukulkannya hingga tulang lawannya menjadi hancur berkeping-keping dari dalam.",
		'th-th': "อัดพลังแห่งความโกรธที่เก็บงำไว้ในใจลงในกำปั้น ฝ่ายตรงข้ามที่โดน กำปั้นนั้นฟาดใส่จะถูกบดขยี้จากไขกระดูก"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'id-id': "Mengamuk",
			'th-th': "อาละวาดไปทั่ว"
		},

		effect: {
			'id-id': "Ubah kondisi Pokémon ini menjadi Pusing.",
			'th-th': "ทำให้โปเกมอนนี้เป็นสภาวะ[สับสน]"
		},

		damage: 130,
		cost: ["Fighting"]
	}, {
		name: {
			'id-id': "Pertarungan Tumbang Bersama",
			'th-th': "สู้ตายไปตามกัน"
		},

		effect: {
			'id-id': "Pokémon Bertarung kedua pemain KO.",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ของทั้งสองฝ่าย[หมดสภาพ]"
		},

		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card