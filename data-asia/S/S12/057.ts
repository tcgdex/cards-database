import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "扒手貓",
		th: "โจโรเนโกะ"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'zh-tw': "為了要看見人們困擾的樣子而去偷盜他們的物品。 和偷兒狐是競爭對手。",
		th: "ขโมยของคนอื่นเพราะอยากเห็นคนอื่นเดือดร้อน เป็นศัตรูกับคุสุเนะ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "亂抓",
			th: "ข่วนแหลก"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×10點傷害。",
			th: "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10"
		},

		damage: "10×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card