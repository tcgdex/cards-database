import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ギャラドスex",
		'zh-tw': "暴鯉龍ex",
		'th-th': "เกียราดอสex",
		'id-id': "Gyarados ex"
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
			'ja-jp': "たきのぼり",
			'zh-tw': "攀瀑",
			'th-th': "ปีนน้ำตก",
			'id-id': "Melawan Arus"
		},

		damage: 100
	}, {
		cost: ["Water", "Water", "Water", "Colorless", "Colorless"],

		name: {
			'ja-jp': "タイラントテール",
			'zh-tw': "暴君尾",
			'th-th': "ไทแรนต์เทล",
			'id-id': "Tyrant Tail"
		},

		damage: "180+",

		effect: {
			'ja-jp': "相手のバトルポケモンにダメカンがのっているなら、180ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加180點傷害。",
			'th-th': "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 180",
			'id-id': "Jika Pokémon Bertarung lawan memiliki Token Kerusakan, kerusakan yang diberikan bertambah sejumlah 180."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 692980,
				tcgplayer: 567131,
			},
		},
	],

	retreat: 4,
	regulationMark: "G",
}

export default card