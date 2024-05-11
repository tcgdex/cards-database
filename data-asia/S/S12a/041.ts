import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "捷拉奧拉VMAX",
		th: "เซราโอราVMAX"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 320,
	types: ["Lightning"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "反應脈衝",
			th: "รีแอ็กพัลส์"
		},

		effect: {
			'zh-tw': "造成對手場上擁有特性的寶可夢的數量×60點傷害。",
			th: "แดเมจจะเท่ากับจำนวนโปเกมอนที่มีความสามารถบนกระดานฝ่ายตรงข้าม x60"
		},

		damage: "60×",
		cost: ["Lightning", "Lightning"]
	}, {
		name: {
			'zh-tw': "極巨電拳",
			th: "ไดฟิสต์"
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 240,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card