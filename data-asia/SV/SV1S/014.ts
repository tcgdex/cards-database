import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ギャラドスex",
		'zh-tw': "暴鯉龍ex",
		th: "เกียราดอสex",
		id: "Gyarados ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 300,
	types: ["Water"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Water", "Water", "Water"],

		name: {
			ja: "たきのぼり",
			'zh-tw': "攀瀑",
			th: "ปีนน้ำตก",
			id: "Melawan Arus"
		},

		damage: 100
	}, {
		cost: ["Water", "Water", "Water", "Colorless", "Colorless"],

		name: {
			ja: "タイラントテール",
			'zh-tw': "暴君尾",
			th: "ไทแรนต์เทล",
			id: "Tyrant Tail"
		},

		damage: "180+",

		effect: {
			ja: "相手のバトルポケモンにダメカンがのっているなら、180ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加180點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 180",
			id: "Jika Pokémon Bertarung lawan memiliki Token Kerusakan, kerusakan yang diberikan bertambah sejumlah 180."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card