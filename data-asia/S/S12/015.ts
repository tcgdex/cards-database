import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火斑喵",
		th: "เนียบี",
		ja: "ニャビー"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'zh-tw': "每年會換２次毛。當換毛的時期到來時，會用火點燃 自己的身體，把舊的毛燒掉。",
		th: "จะผลัดขนใหม่ปีละ 2 หน เมื่อถึงเวลาจะจุดไฟใส่ร่างกายตัวเอง แล้วเผาขนเก่าทิ้ง",
		ja: "１年に ２度 毛が 生え変わる。 時期が くると 自分の 身体に 火を つけて 古い 毛を 焼く。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬",
			th: "แทะ",
			ja: "かじる"
		},

		damage: 10,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "回擊",
			th: "ล้างแค้น",
			ja: "しかえし"
		},

		effect: {
			'zh-tw': "造成這隻寶可夢身上放置的傷害指示物的數量×20點傷害。",
			th: "แดเมจจะเท่ากับจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x20",
			ja: "このポケモンにのっているダメカンの数×20ダメージ。"
		},

		damage: "20×",
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [725]
}

export default card