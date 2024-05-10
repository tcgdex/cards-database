import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷丘",
		th: "ไรชู"
	},

	illustrator: "cochi8i",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		'zh-tw': "如果雙頰上的電囊儲存了飽滿的電力， 兩隻耳朵就會直直地豎起。",
		th: "พอกระแสไฟฟ้าในถุงเก็บไฟฟ้าที่แก้มเต็ม หูทั้งสองข้างจะยืดตรง"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "捲入伏特",
			th: "สายฟ้าพันพัว"
		},

		effect: {
			'zh-tw': "這隻寶可夢以外的雙方的身上放置有傷害指示物的所有寶可夢，各受到50點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนของทั้งสองฝ่ายทุกตัวที่มีตัวนับแดเมจวางอยู่ นอกเหนือจากโปเกมอนนี้ จะได้รับแดเมจตัวละ 50 {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		},

		cost: ["Lightning", "Colorless"]
	}, {
		name: {
			'zh-tw': "雷電球",
			th: "ไลท์นิงบอล"
		},

		damage: 120,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card