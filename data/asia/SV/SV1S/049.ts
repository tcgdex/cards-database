import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "イダイナキバex",
		'zh-tw': "雄偉牙ex",
		'th-th': "งายักษ์ex",
		'id-id': "Great Tusk ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 250,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "がんばんくずし",
			'zh-tw': "岩盤崩裂",
			'th-th': "ทำลายฐานราก",
			'id-id': "Peruntuh Batuan Dasar"
		},

		damage: 40,

		effect: {
			'ja-jp': "場に出ているスタジアムをトラッシュする。",
			'zh-tw': "將場上的競技場卡丟棄。",
			'th-th': "ทิ้งการ์ดสเตเดียมที่วางอยู่บนกระดานที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Buang Stadium yang ada di Arena ke Trash."
		}
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			'ja-jp': "ギガントタスク",
			'zh-tw': "巨烈長牙",
			'th-th': "ปฏิบัติการใหญ่",
			'id-id': "Gigant Tusk"
		},

		damage: 250,

		effect: {
			'ja-jp': "このポケモンにも50ダメージ。",
			'zh-tw': "這隻寶可夢也受到50點傷害。",
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 50 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 50."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693016,
				tcgplayer: 567166,
			},
		},
	],

	retreat: 4,
	regulationMark: "G"
}

export default card