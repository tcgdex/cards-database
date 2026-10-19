import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	dexId: [624],
	rarity: "Common",
	set: Set,

	name: {
		ja: "コマタナ",
		'zh-tw': "駒刀小兵",
		th: "โคมาทานา"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "キリキザンを ボスとした 群れを つくる。 群れを 率いる ことを 夢見て 日々 鍛錬を 積む。",
		'zh-tw': "以劈斬司令為首領組成族群。目標是有朝一日能統領同類，所以每天都在不懈地鍛鍊。",
		th: "สร้างฝูงโดยให้คิริคิซันเป็นจ่าฝูง ใฝ่ฝันที่จะเป็นผู้นำฝูงเองจึงหมั่นฝึกฝนอยู่ทุกวี่วัน"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "つるぎのまい",
			'zh-tw': "劍舞",
			th: "ระบำดาบ"
		},

		effect: {
			ja: "次の自分の番、このポケモンの「きりさく」のダメージは「+70」される。",
			'zh-tw': "在下個自己的回合，這隻寶可夢「劈開」的傷害「+70」點。",
			th: "เทิร์นถัดไปของฝ่ายเรา แดเมจจากท่า [ฟันแหลก] ของโปเกมอนนี้จะถูก [+70]"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "きりさく",
			'zh-tw': "劈開",
			th: "ฟันแหลก"
		},

		damage: 10,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533837, tcgplayer: 569094, cardtrader: 240064 } }
	]
}

export default card