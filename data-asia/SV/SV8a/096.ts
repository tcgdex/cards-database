import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゾロア",
		id: "Zorua",
		th: "โซรัว",
		'zh-tw': "索羅亞",
		'zh-cn': "索羅亞"
	},

	illustrator: "Yuu Nishida",
	rarity: "None",
	category: "Pokemon",
	dexId: [570],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "人や ほかの ポケモンに 化ける。 自分の 正体を 隠すことで 危険から 身を 守っているのだ。",
		id: "Zorua menjelma menjadi manusia atau Pokémon lain. Dengan menyembunyikan identitasnya, Pokémon ini melindungi dirinya dari bahaya.",
		th: "แปลงกายเป็นคนหรือโปเกมอนตัวอื่น ซ่อนตัวตนที่แท้จริงเพื่อปกป้องตัวเองจากอันตราย",
		'zh-tw': "會化為人類或其他的寶可夢。 透過隱藏自己原本的面貌， 保護自己不遇危險。",
		'zh-cn': "會化為人類或其他的寶可夢。 透過隱藏自己原本的面貌， 保護自己不遇危險。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ふむ",
			id: "Menginjak",
			th: "เหยียบ",
			'zh-tw': "踩",
			'zh-cn': "踩"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "ダブルひっかき",
			id: "Cakaran Ganda",
			th: "ข่วนทวีคูณ",
			'zh-tw': "雙重抓",
			'zh-cn': "雙重抓"
		},

		damage: "20×",

		effect: {
			ja: "コインを2回投げ、オモテの数×20ダメージ。",
			id: "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 20 untuk tiap lemparan dengan hasil sisi depan.",
			th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x20",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×20點傷害。",
			'zh-cn': "擲2次硬幣，造成正面出現的次數×20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card