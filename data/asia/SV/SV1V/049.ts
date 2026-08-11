import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "マンキー",
		'zh-tw': "猴怪",
		'th-th': "แมนคี",
		'id-id': "Mankey"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	dexId: [56],
	hp: 60,
	types: ["Fighting"],

	description: {
		'ja-jp': "普段は 機嫌が 良くても ちょっとしたことで いきなり 暴れだすから 怖いのだ。",
		'zh-tw': "平時就算心情再怎麼好，也會因為一點芝麻小事 而突然暴怒，令人害怕。",
		'th-th': "ปกติจะอารมณ์ดี แต่น่ากลัวตรงที่ถ้ามีอะไรไปสะกิดนิดหน่อยก็จะอาละวาดขึ้นมาทันที",
		'id-id': "Meskipun kondisi hatinya selalu baik, Mankey menakutkan karena ia akan tiba-tiba mengamuk hanya karena hal kecil."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "さるなぐり",
			'zh-tw': "猴打擊",
			'th-th': "ลิงต่อย",
			'id-id': "Pukulan Monyet"
		},

		damage: 30,

		effect: {
			'ja-jp': "このポケモンにも10ダメージ。",
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 10."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693124,
				tcgplayer: 568275,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card