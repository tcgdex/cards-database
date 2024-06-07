import { Card } from "../../../interfaces"
import Set from "../SVAL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "電龍ex",
		th: "เด็นริวex",
		id: "Ampharos ex"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 330,
	types: ["Lightning"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "電球",
			th: "อิเล็กทริกบอล",
			id: "Electro Ball"
		},

		damage: 60,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "雷電尾",
			th: "ไลท์นิงเทล",
			id: "Lightning Tail"
		},

		effect: {
			'zh-tw': "若希望，將2個這隻寶可夢身上附加的能量丟棄，增加100點傷害。",
			th: "หากต้องการ ทิ้งพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูกที่ตำแหน่งทิ้งการ์ด การโจมตีนี้จะเพิ่มแดเมจอีก 100",
			id: "Pemain dapat membuang 2 Energi yang dikenakan pada Pokémon ini ke Trash, kerusakan yang diberikan bertambah sejumlah 100."
		},

		damage: "140+",
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card