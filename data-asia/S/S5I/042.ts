import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "黑暗鴉",
		th: "ยามิคาราซึ"
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "會為了老大尋找閃閃發亮的東西。被人們視為不吉利的象徵，厭惡牠的人也很多。",
		th: "จะหาของที่ส่องแสงระยิบระยับเพื่อหัวหน้า ว่ากันว่าเป็นสิ่งอัปมงคล จึงมีคนรังเกียจอยู่ไม่น้อย"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "偵察",
			th: "สำรวจ"
		},

		effect: {
			'zh-tw': "查看對手的手牌。",
			th: "ดูการ์ดบนมือของฝ่ายตรงข้าม"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "啄",
			th: "จิก"
		},

		damage: 20,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card