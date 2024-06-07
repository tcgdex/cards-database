import { Card } from "../../../interfaces"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ヨーギラス",
		'zh-tw': "幼基拉斯",
		th: "โยกิราส",
		id: "Larvitar"
	},

	illustrator: "Haru Akasaka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [246],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "地面 深くで 生まれ 山ほどの 土を 食べ終わると 体を つくるため サナギになる。",
		'zh-tw': "誕生在地底深處。當牠吃完滿山的土壤後， 就會為了成長而變成蛹。",
		th: "เกิดมาใต้ชั้นดินลึก พอกินดินเท่าภูเขาเข้าไปจะกลายเป็นดักแด้เพื่อเสริมสร้างร่างกายใหม่",
		id: "Larvitar terlahir di bawah tanah yang dalam. Untuk membentuk tubuhnya, Pokémon ini menjadi pupa setelah memakan habis segunung tanah."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "にどづき",
			'zh-tw': "二連撞",
			th: "พุ่งชนสองครั้ง",
			id: "Menusuk Dua Kali"
		},

		damage: "10×",

		effect: {
			ja: "コインを2回投げ、オモテの数×10ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×10點傷害。",
			th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10",
			id: "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card