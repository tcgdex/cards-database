import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵武者",
		th: "นักรบเหล็ก"
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'zh-tw': "牠有可能就是在某本探險記裡，以鐵武者這個 名字被記載下來的物體。",
		th: "มีโอกาสที่จะเป็นวัตถุที่เรียกว่านักรบเหล็กซึ่งระบุไว้ในบันทึกการสำรวจเล่มหนึ่ง"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "演算",
			th: "คำนวณสูตร"
		},

		effect: {
			'zh-tw': "查看自己的牌庫上方4張卡，以任意順序排列，放回牌庫上方。",
			th: "ดูการ์ด 4 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เรียงตามลำดับที่ชอบ ใส่กลับไปด้านบนของสำรับการ์ด"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "莊嚴之劍",
			th: "ดาบทรงอำนาจ"
		},

		effect: {
			'zh-tw': "在這個回合，若從手牌使出了「未來」支援者卡，則增加100點傷害。",
			th: "เทิร์นนี้ ถ้านำการ์ดซัพพอร์ต [อนาคต] จากบนมือออกมาใช้แล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 100"
		},

		damage: "100+",
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card