import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "焰后蜥",
		th: "เอ็นนิวท์"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'zh-tw': "據說焰后蜥之間在爭鬥時，是透過比拼誰帶著更多隻雄性夜盜火蜥來定勝負的。",
		th: "ดูเหมือนว่าการต่อสู้ของเอ็นนิวท์ด้วยกันเอง จะแพ้หรือชนะขึ้นอยู่กับจำนวนของยาโทโมริตัวผู้ที่พามาด้วย"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "蠱惑",
			th: "ทำให้สับสน"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ของฝ่ายตรงข้ามเป็นสภาวะ [สับสน]"
		},

		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "燒壞",
			th: "เผาเย้าแหย่"
		},

		effect: {
			'zh-tw': "造成對手的戰鬥寶可夢處於特殊狀態的數量×90點傷害。",
			th: "แดเมจจะเท่ากับจำนวนสภาวะผิดปกติที่โปเกมอนบนตำแหน่งต่อสู้ของฝ่ายตรงข้ามได้รับอยู่ x90"
		},

		damage: "90×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card