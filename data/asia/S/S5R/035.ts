import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "念力土偶",
		th: "เนนดอลล์"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "似乎是從古代人做的泥偶誕生而來的寶可夢。能靠念力飄浮在空中移動。",
		th: "ดูเหมือนว่าเกิดมาจากตุ๊กตาดินเหนียวของมนุษย์โบราณ ใช้พลังจิตลอยตัวและเคลื่อนที่ไปในอากาศ"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "力量平分",
			th: "พาวเวอร์แชร์"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇【超】能量，以任意方式附於自己的寶可夢身上，直到自己的場上寶可夢身上附加的能量的數量，和對手的場上寶可夢身上附加的能量的數量相同為止。",
			th: "นำพลังงาน [พลังจิต] จากตำแหน่งทิ้งการ์ดฝ่ายเราติดที่โปเกมอนฝ่ายเราตามชอบจนกว่าจำนวนพลังงานที่ติดกับโปเกมอนบนกระดานฝ่ายเราจะเท่ากับจำนวนพลังงานที่ติดกับโปเกมอนบนกระดานฝ่ายตรงข้าม"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "精神射擊",
			th: "ไซโคช็อต"
		},

		damage: 100,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card