import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "胖甜妮",
		th: "เพโรรีม"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'zh-tw': "因為體毛裡富含空氣，所以摸起來十分柔軟，重量也比看起來要輕。",
		th: "ขนตามตัวของมันมีอากาศบรรจุอยู่เป็นจำนวนมาก ก็เลยนุ่มมือเวลาสัมผัสและตัวเบากว่าที่เห็น"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "探尋氣味",
			th: "ตามกลิ่น"
		},

		effect: {
			'zh-tw': "擲3次硬幣，從自己的棄牌區任意選擇最多與正面出現的次數相同數量的卡，在給對手看過後加入手牌。",
			th: "ทอยเหรียญ 3 ครั้ง เลือกการ์ดที่ชอบจากตำแหน่งทิ้งการ์ดฝ่ายเราได้สูงสุดไม่เกินจำนวนครั้งที่ออกหัว ให้ฝ่ายตรงข้ามดู แล้วนำขึ้นมือ"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "妖精之風",
			th: "สายลมแห่งภูตพราย"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card