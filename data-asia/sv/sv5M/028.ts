import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鍬農炮蟲",
		th: "คุวากานอน"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	description: {
		'zh-tw': "用腹部發電，並把電力集中在大大的顎部， 釋放出能量驚人的光束。",
		th: "ไฟฟ้าที่ผลิตจากท้อง เก็บไว้ในกรามขนาดใหญ่แล้วปล่อยลำแสงขนาดใหญ่โจมตี"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "音速伏特",
			th: "มัคโบลต์"
		},

		damage: 50,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "串聯加農炮",
			th: "ปืนใหญ่อนุกรม"
		},

		effect: {
			'zh-tw': "增加自己的備戰區的「蟲電寶」的數量×80點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวน [เด็นจิมูชิ] บนเบนช์ฝ่ายเรา x80"
		},

		damage: "120+",
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card