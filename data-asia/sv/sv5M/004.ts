import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "長鼻葉",
		th: "โคโนฮานะ"
	},

	illustrator: "Lee HyunJung",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "棲息在森林深處。會用頭上的葉子做成笛子， 吹出令人感到不安的音色。",
		th: "อาศัยอยู่ในป่าลึก สร้างขลุ่ยด้วยใบไม้บนหัว จะส่งเสียงที่ทำให้รู้สึกกระสับกระส่าย"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "推擊",
			th: "ต่อยตี"
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "連出巴掌",
			th: "ตบต่อเนื่อง"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×30點傷害。",
			th: "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x30"
		},

		damage: "30×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card