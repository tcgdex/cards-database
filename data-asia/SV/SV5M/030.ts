import { Card } from "../../../interfaces"
import Set from "../SV5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵荊棘",
		th: "หนามเหล็ก"
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		'zh-tw': "有一部分的特徵與某本探險記裡以鐵荊棘 來介紹的物體一致。",
		th: "มีลักษณะเด่นตรงกับวัตถุที่แนะนำว่าเป็นหนามเหล็กในบันทึกการสำรวจเล่มหนึ่ง"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "壞死壓榨",
			th: "บีบอัดแหลกลาญ"
		},

		effect: {
			'zh-tw': "將自己的牌庫上方5張卡翻到正面，造成其中的「未來」卡的張數×70點傷害。將翻到正面的「未來」卡丟棄，將剩餘卡放回牌庫並重洗。",
			th: "หงายการ์ด 5 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา ทำแดเมจเท่ากับจำนวนการ์ด [อนาคต] ที่อยู่ในนั้น x70 ทิ้งการ์ด [อนาคต] ที่หงายไว้ที่ตำแหน่งทิ้งการ์ด การ์ดที่เหลือใส่กลับไปในสำรับการ์ดแล้วสับ"
		},

		damage: "70×",
		cost: ["Lightning", "Colorless"]
	}, {
		name: {
			'zh-tw': "百萬噸金勾臂",
			th: "เมกะตันแลเรียท"
		},

		damage: 140,
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card