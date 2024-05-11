import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小灰怪",
		th: "ลีเกรย์"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "當牠站在電視機旁邊時，畫面上會出現奇怪的景色。 據說那是牠的故鄉。",
		th: "ถ้าอยู่ข้าง ๆ ทีวีตรงมอนิเตอร์จะฉายภาพทิวทัศน์ประหลาด ว่ากันว่ามันคือภาพบ้านเกิดของลีเกรย์"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "頭錘",
			th: "พุ่งหัวชน"
		},

		damage: 20,
		cost: ["Psychic"]
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