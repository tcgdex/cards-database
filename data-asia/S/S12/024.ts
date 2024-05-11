import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮卡丘",
		th: "พิคาชู"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'zh-tw': "越是能製造出強大電流的皮卡丘，臉頰上的囊就越 柔軟，同時也越有伸展性。",
		th: "ยิ่งไฟฟ้าที่พิคาชูผลิตมีความรุนแรงมากเท่าไร กระพุ้งแก้มก็ยิ่งนิ่มและยืดได้มากขึ้นเท่านั้น"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "皮卡強襲",
			th: "พิคาสไตรค์"
		},

		effect: {
			'zh-tw': "在上個自己的回合，若自己的「咚咚鼠」使出了「咚咚短路」，則增加180點傷害。",
			th: "เทิร์นก่อนของฝ่ายเรา ถ้า [เดเด็นเนะ] ฝ่ายเราใช้ [เดเดช็อต] ไปแล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 180"
		},

		damage: "20+",
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card