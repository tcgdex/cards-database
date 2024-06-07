import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵螯龍蝦",
		th: "ชิซาริเกอร์"
	},

	illustrator: "Hasegawa Saki",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		'zh-tw': "有著熱愛戰鬥的性格。當遇到靠近自己領地的對手，會毫不留情地將之打倒。",
		th: "มีนิสัยชอบต่อสู้ จะตีศัตรูที่เข้ามาใกล้รังจนล้มตึงอย่างไม่ปรานี"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "拍落",
			th: "ตบร่วง"
		},

		effect: {
			'zh-tw': "在不看正面的情況下，選擇1張對手的手牌，將其丟棄。",
			th: "เลือกการ์ดบนมือฝ่ายตรงข้าม 1 ใบโดยไม่ดูหน้าการ์ด ทิ้งที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 60,
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "蟹鉗錘",
			th: "ค้อนก้ามปู"
		},

		damage: 140,
		cost: ["Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card