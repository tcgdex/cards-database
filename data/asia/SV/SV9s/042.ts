import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ราคุไร",
		'id-id': "Electrike"
	},

	illustrator: "Narano",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'th-th': "สะสมไฟฟ้าสถิตไว้ที่ขนตามร่างกาย ในฤดูที่อากาศแห้งจะปล่อย ประกายไฟออกมาทั่วตัว",
		'id-id': "Electrike menyimpan listrik statis di dalam bulunya. Pada musim yang udaranya kering, Pokémon ini memercikkan bunga api dari seluruh tubuhnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "เตะกลับหลัง",
			'id-id': "Tendangan Belakang"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "โวลต์ต่ำ",
			'id-id': "Voltase Mini"
		},

		damage: 30,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card