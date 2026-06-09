import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ルガルガンex",
		'zh-tw': "鬃岩狼人ex",
		th: "ลูกาลูกันex",
		id: "Lycanroc ex"
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
			ja: "いわおとし",
			'zh-tw': "落石",
			th: "หินผาถล่ม",
			id: "Lemparan Batu"
		},

		damage: 40
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "スケアリーファング",
			'zh-tw': "駭人獠牙",
			th: "สแกรีแฟงก์",
			id: "Scary Fang"
		},

		damage: 140,

		effect: {
			ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを10個のせる。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害時，在使用招式的寶可夢身上放置10個傷害指示物。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม เมื่อโปเกมอนนี้ได้รับแดเมจของท่าต่อสู้ วางตัวนับแดเมจ 10 ตัวบนโปเกมอนที่ใช้ท่าต่อสู้",
			id: "Pada giliran lawan berikutnya, saat Pokémon ini menerima kerusakan akibat serangan, letakkan 10 Token Kerusakan pada Pokémon yang telah menggunakan serangan."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 701104
	}
}

export default card