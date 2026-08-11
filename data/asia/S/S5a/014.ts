import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "利牙魚",
		th: "คิบาเนีย"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		'zh-tw': "結實的下巴和牙齒能夠輕易地咬碎木造的船隻。與野蠻鱸魚互相爭奪著食物。",
		th: "กรามและเขี้ยวที่แข็งแรงนั้นสามารถบดทำลายเรือไม้ได้อย่างง่ายดาย มักแย่งชิงเหยื่อกับบาสราโอ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "衝撞",
			th: "กระแทก"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "鰭快刀",
			th: "ครีบใบมีด"
		},

		damage: 20,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card