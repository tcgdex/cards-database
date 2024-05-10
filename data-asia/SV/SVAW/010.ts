import { Card } from "../../../interfaces"
import Set from "../SVAW"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "摩托蜥",
		th: "โมโตโทคาเงะ",
		id: "Cyclizar"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'zh-tw': "似乎自古就會讓人類坐在背上。１萬年前的 壁畫上描繪著該模樣。",
		th: "ดูเหมือนว่าจะให้ผู้คนขี่บนหลังมาตั้งแต่สมัยโบราณ มีการวาดภาพของมันบนจิตรกรรมฝาผนังเมื่อ 10000 ปีที่แล้ว",
		id: "Kabarnya, sudah sejak dahulu kala manusia menunggangi punggung Cyclizar. Situasi tersebut terlukiskan dalam sebuah mural 10 ribu tahun lalu."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "突擊",
			th: "ประจัญบาน",
			id: "Menyerang"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			id: "Pokémon ini juga menerima kerusakan sejumlah 10."
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card