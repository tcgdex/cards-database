import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "マンキー",
		'zh-tw': "猴怪",
		th: "แมนคี",
		id: "Mankey"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	dexId: [56],
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "普段は 機嫌が 良くても ちょっとしたことで いきなり 暴れだすから 怖いのだ。",
		'zh-tw': "平時就算心情再怎麼好，也會因為一點芝麻小事 而突然暴怒，令人害怕。",
		th: "ปกติจะอารมณ์ดี แต่น่ากลัวตรงที่ถ้ามีอะไรไปสะกิดนิดหน่อยก็จะอาละวาดขึ้นมาทันที",
		id: "Meskipun kondisi hatinya selalu baik, Mankey menakutkan karena ia akan tiba-tiba mengamuk hanya karena hal kecil."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "さるなぐり",
			'zh-tw': "猴打擊",
			th: "ลิงต่อย",
			id: "Pukulan Monyet"
		},

		damage: 30,

		effect: {
			ja: "このポケモンにも10ダメージ。",
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			id: "Pokémon ini juga menerima kerusakan sejumlah 10."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card