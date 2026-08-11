import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヨーギラス",
		'zh-tw': "幼基拉斯",
		'th-th': "โยกิราส",
		'id-id': "Larvitar"
	},

	illustrator: "Haru Akasaka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [246],
	hp: 70,
	types: ["Fighting"],

	description: {
		'ja-jp': "地面 深くで 生まれ 山ほどの 土を 食べ終わると 体を つくるため サナギになる。",
		'zh-tw': "誕生在地底深處。當牠吃完滿山的土壤後， 就會為了成長而變成蛹。",
		'th-th': "เกิดมาใต้ชั้นดินลึก พอกินดินเท่าภูเขาเข้าไปจะกลายเป็นดักแด้เพื่อเสริมสร้างร่างกายใหม่",
		'id-id': "Larvitar terlahir di bawah tanah yang dalam. Untuk membentuk tubuhnya, Pokémon ini menjadi pupa setelah memakan habis segunung tanah."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "にどづき",
			'zh-tw': "二連撞",
			'th-th': "พุ่งชนสองครั้ง",
			'id-id': "Menusuk Dua Kali"
		},

		damage: "10×",

		effect: {
			'ja-jp': "コインを2回投げ、オモテの数×10ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×10點傷害。",
			'th-th': "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10",
			'id-id': "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705340,
				tcgplayer: 565898,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
}

export default card