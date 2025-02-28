import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Zapdos",
		th: "ธันเดอร์"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		id: "Zapdos mampu mengendalikan listrik sesukanya. Ada kisah yang menyampaikan bahwa sarangnya ada di dalam awan guntur gelap.",
		th: "ควบคุมไฟฟ้าได้ดั่งใจนึก เป็นที่เล่าขานกันว่าภายในเมฆฝนฟ้าคะนอง สีดำสนิทนั้นมีรังของมันอยู่"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Serangan Lanjutan Voltase",
			th: "สายฟ้าไล่ตี"
		},

		effect: {
			id: "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon Bertarung lawan.",
			th: "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนบนตำแหน่งต่อสู้ ฝ่ายตรงข้าม x10"
		},

		damage: "20+",
		cost: ["Lightning", "Colorless"]
	}, {
		name: {
			id: "Patukan Bor",
			th: "จะงอยสว่าน"
		},

		damage: 80,
		cost: ["Lightning", "Colorless", "Colorless"]
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