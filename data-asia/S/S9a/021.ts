import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "泥泥鰍",
		ja: "ドジョッチ"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "以水質混濁的沼澤為居所，藏身於濁水之中躲避天敵的視線。 體表的黏液使得牠很難用手抓住。",
		ja: "水 濁りし 沼地を 棲み処とす。 視界 悪く 天敵より 姿を隠す。 体表の粘液により 手掴み 難儀なり。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "潑水",
			ja: "みずかけ"
		},

		damage: 40,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [339]
}

export default card