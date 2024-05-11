import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "燃燒蟲",
		th: "เมลาร์วา",
		ja: "メラルバ"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'zh-tw': "遠古時代的人們相信燃燒蟲是從 太陽上摔下來的。",
		th: "ผู้คนในอดีตอันนานมาแล้วเชื่อว่าเมลาร์วาตกลงมาจากดวงอาทิตย์",
		ja: "はるか 昔の 人々は メラルバは 太陽から 落っこちてきたと 信じていた。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "火種",
			th: "เชื้อไฟ",
			ja: "ひだね"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F",
	rarity: "Common",
	dexId: [636]
}

export default card