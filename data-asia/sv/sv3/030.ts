import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ナミイルカ",
		'zh-tw': "波普海豚",
		th: "นามิอิรุกะ"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [963],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "尾びれの 水のリングで 仲間と 遊ぶのが 好き。 超音波で 生き物の 気持ちを 察知する。",
		'zh-tw': "喜歡用尾鰭的水環和夥伴一起玩耍。能透過超音波察覺生物的心情。",
		th: "ชอบเล่นสนุกกับพวกพ้องด้วยวงแหวนน้ำที่ครีบหาง ตรวจจับความรู้สึกของสิ่งมีชีวิตด้วยคลื่นความถี่สูง"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "しっぽでたたく",
			'zh-tw': "尾擊",
			th: "ฟาดหาง"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card