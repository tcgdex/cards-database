import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "月石",
		th: "ลูนาโทน"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "月亮的盈虧似乎會影響牠力量的增減。 每到滿月之夜就會變得活躍。",
		th: "ดูเหมือนว่าพลังที่เพิ่มลดนั้นเกี่ยวเนื่องกับข้างขึ้นข้างแรมของดวงจันทร์ คืนที่พระจันทร์เต็มดวงจะกระปรี้กระเปร่า"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "循環抽出",
			th: "ไซเคิลดรอว์"
		},

		effect: {
			'zh-tw': "將自己的1張手牌丟棄。然後，從自己的牌庫抽出3張卡。",
			th: "ทิ้งการ์ดบนมือฝ่ายเรา 1 ใบที่ตำแหน่งทิ้งการ์ด หลังจากนั้น จั่วการ์ด 3 ใบจากสำรับการ์ดฝ่ายเรา"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "月亮強念",
			th: "มูนคิเนซิส"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上附加的【超】能量的數量×30點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนพลังงาน[พลังจิต]ที่ติดอยู่กับโปเกมอนนี้ x30"
		},

		damage: "30+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card