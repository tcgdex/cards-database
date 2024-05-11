import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "偷兒狐",
		th: "คุสุเนะ",
		ja: "クスネ"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'zh-tw': "靠搶奪其他寶可夢找到的食物為生。腳上長著軟乎乎的肉球， 走路時不會發出絲毫聲響。",
		th: "มีชีวิตอยู่โดยขโมยเหยื่อที่โปเกมอนตัวอื่นหามาได้ เนื้อเท้านุ่มนิ่มจึงเดินไม่มีเสียง",
		ja: "ほかの ポケモンが みつけた 餌を 掠めて 暮らしている。 ふかふかの 肉球は 足音を たてない。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "後踢",
			th: "เตะกลับหลัง",
			ja: "うしろげり"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [827]
}

export default card