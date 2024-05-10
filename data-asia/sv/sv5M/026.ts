import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "電擊魔獸",
		th: "เอเลคิเบิล"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		'zh-tw': "發電量與心跳數成正比。當牠面臨戰鬥的時候， 電壓就會急速飆升。",
		th: "ปริมาณไฟฟ้าที่ผลิตนั้นแปรผันตามอัตราการเต้นของหัวใจ เมื่อเข้าสู่การต่อสู้ แรงดันไฟฟ้าจะพุ่งสูงขึ้นในหนึ่งอึดใจ"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "漏電關節",
			th: "สนับมือไฟรั่ว"
		},

		effect: {
			'zh-tw': "若對手的場上有【水】寶可夢，則增加120點傷害。",
			th: "ถ้าบนกระดานฝ่ายตรงข้ามมีโปเกมอน[น้ำ]อยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 120"
		},

		damage: "40+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "電氣猛擊",
			th: "อิเล็กทริกสลัก"
		},

		damage: 140,
		cost: ["Lightning", "Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card