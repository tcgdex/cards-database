import { Card } from "../../../interfaces"
import Set from "../SVAL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "呆火鱷",
		th: "โฮเกเตอร์",
		id: "Fuecoco"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'zh-tw': "火囊很小，因此能量會溢出來，在牠頭上的 凹槽那裡搖曳晃動。",
		th: "ถุงไฟมีขนาดเล็ก ทำให้พลังงานนั้นเอ่อล้นออกมาจากร่องบนหัวและสั่นไหวไปมา",
		id: "Karena kantong api Fuecoco kecil, energi yang meluap dikeluarkan dari cekungan di kepalanya dan bergoyang-goyang."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬",
			th: "แทะ",
			id: "Menggerogot"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "烈焰",
			th: "เผาไหม้",
			id: "Lidah Api"
		},

		damage: 50,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card