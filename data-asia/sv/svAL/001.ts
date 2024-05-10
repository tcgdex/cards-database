import { Card } from "../../../interfaces"
import Set from "../svAL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "卡蒂狗",
		th: "การ์ดี",
		id: "Growlithe"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'zh-tw': "性格誠實，容易和人親近。遇到敵人時牠會吼叫追咬， 試著把敵人趕走。",
		th: "เป็นมิตรและซื่อสัตย์ จะพยายามไล่ศัตรูออกไปด้วยการเห่าและไล่กัดอีกฝ่าย",
		id: "Growlithe jinak dan berkepribadian jujur. Pokémon ini mengusir lawan dengan menggonggong dan menggigit mereka."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "連續火焰",
			th: "เพลิงไฟต่อเนื่อง",
			id: "Api Beruntun"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×30點傷害。",
			th: "ทอยเหรียญจนกว่าจะออกก้อย แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x30",
			id: "Lempar koin hingga hasilnya sisi belakang. Serangan ini memberikan kerusakan sejumlah 30 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "30×",
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card