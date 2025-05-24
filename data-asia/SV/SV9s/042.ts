import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "ราคุไร",
		id: "Electrike"
	},

	illustrator: "Narano",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		th: "สะสมไฟฟ้าสถิตไว้ที่ขนตามร่างกาย ในฤดูที่อากาศแห้งจะปล่อย ประกายไฟออกมาทั่วตัว",
		id: "Electrike menyimpan listrik statis di dalam bulunya. Pada musim yang udaranya kering, Pokémon ini memercikkan bunga api dari seluruh tubuhnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "เตะกลับหลัง",
			id: "Tendangan Belakang"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			th: "โวลต์ต่ำ",
			id: "Voltase Mini"
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