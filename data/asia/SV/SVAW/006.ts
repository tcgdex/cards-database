import { Card } from "../../../interfaces"
import Set from "../SVAW"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "謎擬Ｑex",
		th: "มิมิคคิวex",
		id: "Mimikyu ex"
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "虛無折返",
			th: "กลับสู่ความว่างเปล่า",
			id: "Putar Balik Hampa"
		},

		effect: {
			'zh-tw': "若希望，將這隻寶可夢與備戰寶可夢互換。",
			th: "หากต้องการ สลับโปเกมอนนี้กับโปเกมอนบนเบนช์",
			id: "Pemain dapat menukar Pokémon ini dengan Pokémon Cadangan."
		},

		damage: 30,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "能量爆炸",
			th: "เอนเนอร์จี้เบิสท์",
			id: "Energy Burst"
		},

		effect: {
			'zh-tw': "造成雙方的戰鬥寶可夢身上附加的能量的數量×30點傷害。",
			th: "แดเมจจะเท่ากับจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ของทั้งสองฝ่าย x30",
			id: "Serangan ini memberikan kerusakan sejumlah 30 untuk tiap Energi yang dikenakan pada Pokémon Bertarung kedua pemain."
		},

		damage: "30×",
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card