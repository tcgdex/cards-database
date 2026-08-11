import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ラッキー",
		'zh-tw': "吉利蛋",
		'th-th': "ลัคกี",
		'id-id': "Chansey"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	dexId: [113],
	hp: 110,
	types: ["Colorless"],

	description: {
		'ja-jp': "持っている タマゴを 割らないように 気をつけて 歩く。 でも 逃げ足は とても 速い。",
		'zh-tw': "為了避免蛋被打破，走起路來小心謹慎。 然而逃跑速度卻是快之無比。",
		'th-th': "เดินอย่างระวังเพื่อไม่ให้ไข่ที่มีอยู่แตก แต่ตอนหนีจะหนีไวมาก",
		'id-id': "Chansey selalu berjalan dengan hati-hati agar telur yang dibawanya tidak pecah. Tapi, Pokémon ini melarikan diri dengan cepat."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "はたく",
			'zh-tw': "拍擊",
			'th-th': "ปัด",
			'id-id': "Tumbuk"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "タマゴころがし",
			'zh-tw': "滾動之蛋",
			'th-th': "กลิ้งไข่",
			'id-id': "Menggelindingkan Telur"
		},

		damage: "60×",

		effect: {
			'ja-jp': "ウラが出るまでコインを投げ、オモテの数×60ダメージ。",
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×60點傷害。",
			'th-th': "ทอยเหรียญจนกว่าจะออกก้อย แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x60",
			'id-id': "Lempar koin hingga hasilnya sisi belakang. Serangan ini memberikan kerusakan sejumlah 60 untuk tiap lemparan dengan hasil sisi depan."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693134,
				tcgplayer: 568285,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
}

export default card