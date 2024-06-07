import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "綿綿泡芙",
		th: "เพร็อพพัฟ"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "蓬鬆的體毛聞起來就像棉花糖一樣甜甜的。會放出黏答答的絲纏住敵人。",
		th: "ขนปุย ๆ บนตัวมีกลิ่นหอมหวานเหมือนขนมสายไหม ปล่อยใยเหนียว ๆ ออกมาพันตัวศัตรู"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "吸取之吻",
			th: "เดรนคิส"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「10」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [10]"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card