import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Zebstrika",
		th: "ซีบรายกา"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		id: "Begitu mendengar guntur, kelompok Pokémon ini mengejar awan petir agar Blitzle di dalam kelompoknya bisa mengecas dari petir.",
		th: "เมื่อได้ยินเสียงฟ้าร้อง จะไล่ตามเมฆฝนฟ้าคะนองไปเป็นฝูง เพื่อให้ ชิมามาในฝูงชาร์จไฟจากสายฟ้าได้"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Kick",
			th: "เตะ"
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			id: "Mach Bolt",
			th: "มัคโบลต์"
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