import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "メラルバ",
		'zh-tw': "燃燒蟲",
		th: "เมลาร์วา",
		id: "Larvesta"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	dexId: [636],
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "太陽を 盗んだ 幼虫と 呼ばれていた。 ツノから 噴き出す 炎は 鉄板も 焼き切る。",
		'zh-tw': "過去被稱為盜日幼蟲。從角噴出來的火焰， 就連鐵板都能燒斷。",
		th: "เคยถูกเรียกว่าตัวอ่อนแมลงที่ขโมยพระอาทิตย์ไป ไฟที่พ่นออกมาจากเขาสามารถเผาได้กระทั่งแผ่นเหล็ก",
		id: "Larvesta dikenal sebagai larva pencuri matahari. Api yang dikeluarkan dari tanduknya dapat memotong pelat besi."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ほのお",
			'zh-tw': "火焰",
			th: "ไฟ",
			id: "Api"
		},

		damage: 10
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			ja: "とっしん",
			'zh-tw': "猛撞",
			th: "พุ่งเข้าใส่",
			id: "Menerjang"
		},

		damage: 40,

		effect: {
			ja: "このポケモンにも10ダメージ。",
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			id: "Pokémon ini juga menerima kerusakan sejumlah 10."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card