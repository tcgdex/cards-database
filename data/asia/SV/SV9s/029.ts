import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โอการ์ปอง หน้ากากเตาไฟ",
		'id-id': "Ogerpon Topeng Tungku"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		'th-th': "ร่างที่ถนัดการโจมตีมากที่สุด จู่โจมศัตรูต่อเนื่องอย่างรุนแรงดั่ง เปลวไฟที่ลุกโชนในเตาไฟ",
		'id-id': "Wujud yang paling agresif. Ia menyerang musuhnya dengan ganas seperti api yang membara di dalam tungku."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "รำสักการะไฟ",
			'id-id': "Pertunjukan Spiritual Api"
		},

		effect: {
			'th-th': "เลือกการ์ด [พลังงานพื้นฐาน[ไฟ]] 1 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอน ฝ่ายเรา แล้วสับสำรับการ์ด",
			'id-id': "Pilih 1 lembar Energi Dasar {Api} dari Deck sendiri, lalu kenakan pada Pokémon sendiri. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "เพลิงประลัยกัลป์",
			'id-id': "Kobaran Api Penghangus"
		},

		effect: {
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]",
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar."
		},

		damage: 80,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card