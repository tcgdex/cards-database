import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "銅鏡怪",
		th: "โดมิเรอร์"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		'zh-tw': "雖然人們說把銅鏡怪打磨到發光，牠就能映照出真相，但其實牠非常討厭被打磨。",
		th: "ว่ากันว่าถ้าขัดเงาแล้วส่องประกายจะสะท้อนให้เห็นความจริงออกมา แต่โดมิเรอร์ไม่ชอบมาก ๆ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "衝撞",
			th: "กระแทก"
		},

		damage: 30,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card