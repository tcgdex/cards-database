import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ルガルガンex",
		'zh-tw': "鬃岩狼人ex",
		'th-th': "ลูกาลูกันex",
		'id-id': "Lycanroc ex"
	},

	illustrator: "kawayoo",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Fighting"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "いわおとし",
			'zh-tw': "落石",
			'th-th': "หินผาถล่ม",
			'id-id': "Lemparan Batu"
		},

		damage: 40
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'ja-jp': "スケアリーファング",
			'zh-tw': "駭人獠牙",
			'th-th': "สแกรีแฟงก์",
			'id-id': "Scary Fang"
		},

		damage: 140,

		effect: {
			'ja-jp': "次の相手の番、このポケモンがワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを10個のせる。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害時，在使用招式的寶可夢身上放置10個傷害指示物。",
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม เมื่อโปเกมอนนี้ได้รับแดเมจของท่าต่อสู้ วางตัวนับแดเมจ 10 ตัวบนโปเกมอนที่ใช้ท่าต่อสู้",
			'id-id': "Pada giliran lawan berikutnya, saat Pokémon ini menerima kerusakan akibat serangan, letakkan 10 Token Kerusakan pada Pokémon yang telah menggunakan serangan."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 701104,
				tcgplayer: 568173,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
}

export default card