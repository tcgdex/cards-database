import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Blitzle",
		'th-th': "ชิมามา"
	},

	illustrator: "kamonabe",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'id-id': "Ia menyukai wilayah tempat banyak petir menyambar. Ia menerima petir dengan surainya dan menyimpan listrik di tubuhnya.",
		'th-th': "ชอบพื้นที่ที่มีฟ้าผ่าบ่อย รับสายฟ้าด้วยแผงขนบนหัวแล้วสะสมไฟฟ้าไว้ใน ร่างกาย"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Menggondol",
			'th-th': "คาบ"
		},

		effect: {
			'id-id': "Ambil 1 kartu dari atas Deck sendiri.",
			'th-th': "จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Berpijar-pijar",
			'th-th': "ประกายไฟ"
		},

		damage: 20,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card