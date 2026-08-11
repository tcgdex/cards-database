import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Zebstrika",
		'th-th': "ซีบรายกา"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		'id-id': "Begitu mendengar guntur, kelompok Pokémon ini mengejar awan petir agar Blitzle di dalam kelompoknya bisa mengecas dari petir.",
		'th-th': "เมื่อได้ยินเสียงฟ้าร้อง จะไล่ตามเมฆฝนฟ้าคะนองไปเป็นฝูง เพื่อให้ ชิมามาในฝูงชาร์จไฟจากสายฟ้าได้"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Kick",
			'th-th': "เตะ"
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			'id-id': "Mach Bolt",
			'th-th': "มัคโบลต์"
		},

		damage: 120,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card