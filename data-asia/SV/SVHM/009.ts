import { Card } from "../../../interfaces"
import Set from "../SVHM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "密勒頓ex",
		th: "มิไรดอนex",
		id: "Miraidon ex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "抵制伏特",
			th: "รีเจกต์โวลต์",
			id: "Reject Bolt"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加100點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 100",
			id: "Jika Pokémon Bertarung lawan memiliki Token Kerusakan, kerusakan yang diberikan bertambah sejumlah 100."
		},

		damage: "60+",
		cost: ["Lightning", "Psychic"]
	}, {
		name: {
			'zh-tw': "異度猛衝",
			th: "ไซเบอร์ไดรฟ์",
			id: "Cyberdrive"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「異度猛衝」。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [ไซเบอร์ไดรฟ์] ไม่ได้",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan Cyberdrive."
		},

		damage: 220,
		cost: ["Lightning", "Psychic", "Colorless"]
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card