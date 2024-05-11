import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "功夫鼬",
		th: "โคโจฟู"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'zh-tw': "與群體的夥伴們一起在深山裡閉關修行。不同的群體有著不同的踢腿和手刀技法。",
		th: "จะซุ่มตัวอยู่กลางป่าลึก หมั่นฝึกตนกันเป็นฝูง ท่าเตะและท่าสับจะต่างกันไปตามฝูง"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "二連撞",
			th: "พุ่งชนสองครั้ง"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×30點傷害。",
			th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับ จำนวนครั้งที่ออกหัว x30"
		},

		damage: "30×",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card