import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "超夢VSTAR",
		th: "มิวทูVSTAR"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 280,
	types: ["Psychic"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "精神光芒",
			th: "ไซโคเพิร์จ"
		},

		effect: {
			'zh-tw': "將自己的場上寶可夢身上附加的最多3張【超】能量卡丟棄，造成其張數×90點傷害。",
			th: "ทิ้งการ์ดพลังงาน[พลังจิต]ที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายเราได้สูงสุด 3 ใบที่ตำแหน่งทิ้งการ์ด แดเมจจะเท่ากับจำนวนการ์ดนั้น x90"
		},

		damage: "90×",
		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			'zh-tw': "[VSTAR力量]星星襲擊",
			th: "[พลังVSTAR]ดาวโจมตี"
		},

		effect: {
			'zh-tw': "對手的所有「寶可夢【V】」各受到120點傷害。這個招式的傷害不計算弱點・抵抗力。[對戰中，己方只可使用1次【VSTAR】力量。]",
			th: "[โปเกมอน【V】] ฝ่ายตรงข้ามทุกตัว จะได้รับแดเมจตัวละ 120 แดเมจของท่าต่อสู้นี้ไม่นำจุดอ่อนและความต้านทานมาคิด {ในระหว่างการแบตเทิล ฝ่ายเราใช้พลัง【VSTAR】ได้ 1 ครั้งเท่านั้น}"
		},

		cost: ["Psychic", "Colorless"]
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
	regulationMark: "F"
}

export default card