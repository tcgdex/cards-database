import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "コジオ",
		'zh-tw': "鹽石寶"
	},

	illustrator: "yuu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [932],
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "地底の 岩塩層で 生まれた。 貴重な 塩を 分けてくれるため 昔は とくに 大事にされた。",
		'zh-tw': "出生在地底的岩鹽層。會願意分享貴重的鹽巴， 因此在過去更是受到重視。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ずつき",
			'zh-tw': "頭錘"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card