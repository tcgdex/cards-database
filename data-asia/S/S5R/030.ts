import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	dexId: [403],
	rarity: "Common",
	set: Set,

	name: {
		ja: "コリンク",
		'zh-tw': "小貓怪",
		th: "โคลิงก์"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "危険を 感じると 全身の 体毛が 光る。 相手が 目を くらませている あいだに 逃げる。",
		'zh-tw': "一旦感知到危險，全身的體毛就會發光，趁對手眼睛被閃到時逃之夭夭。",
		th: "เมื่อรับรู้ถึงอันตราย ขนทั่วร่างกายจะเปล่งแสงออกมา และจะหลบหนีในช่วงที่ฝ่ายตรงข้ามตาพร่ามัวอยู่"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "うしろげり",
			'zh-tw': "後踢",
			th: "เตะกลับหลัง"
		},

		damage: 20,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533722, tcgplayer: 569071, cardtrader: 240035 } }
	]
}

export default card