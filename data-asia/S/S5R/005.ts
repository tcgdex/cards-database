import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	dexId: [420],
	rarity: "Common",
	set: Set,

	name: {
		ja: "チェリンボ",
		'zh-tw': "櫻花寶",
		th: "เชอรินโบ"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "体が 赤い チェリンボほど 栄養が 多く 玉の 味も 甘くて おいしいよ。",
		'zh-tw': "身體越紅的櫻花寶含有的營養越豐富，味道也很甜很好吃。",
		th: "เชอรินโบตัวที่มีสีแดงจะยิ่งมีสารอาหารสูง ลูกกลม ๆ ของมันก็หวานและอร่อยมาก"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "このは",
			'zh-tw': "樹葉",
			th: "ใบไม้"
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533597, tcgplayer: 569046, cardtrader: 240002 } }
	]
}

export default card