import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ウインディex",
		'zh-tw': "風速狗ex",
		'th-th': "วินดีex",
		'id-id': "Arcanine ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 280,
	types: ["Fire"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			'ja-jp': "いかりのツメ",
			'zh-tw': "憤怒之爪",
			'th-th': "กรงเล็บเกรี้ยวกราด",
			'id-id': "Cakar Kemarahan"
		},

		damage: "30+",

		effect: {
			'ja-jp': "このポケモンにのっているダメカンの数×10ダメージ追加。",
			'zh-tw': "增加這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
			'th-th': "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x10",
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
		}
	}, {
		cost: ["Fire", "Fire", "Fire"],

		name: {
			'ja-jp': "ぐれんのほのお",
			'zh-tw': "紅蓮火焰",
			'th-th': "เพลิงสีเลือด",
			'id-id': "Kobaran Api Merah"
		},

		damage: 250,

		effect: {
			'ja-jp': "このポケモンについているエネルギーを2個選び、トラッシュする。",
			'zh-tw': "選擇2個這隻寶可夢身上附加的【火】能量，將其丟棄。",
			'th-th': "เลือกพลังงาน[ไฟ]ที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Pilih 2 Energi {Api} yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693090,
				tcgplayer: 568242,
			},
		},
	],

	retreat: 3,
	regulationMark: "G",
}

export default card