import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "臭泥",
		ja: "ベトベター"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		'zh-tw': "最近工廠排放的廢水太乾淨，使得牠沒東西可吃。 據說就快要絕種了。",
		ja: "最近は 工場が 流す 廃液が 綺麗で エサが ない。 じき 絶滅すると いわれている。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "毒瓦斯",
			ja: "どくガス"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			ja: "相手のバトルポケモンをどくにする。"
		},

		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F",
	rarity: "Common",
	dexId: [88],

	thirdParty: {
		cardmarket: 605911
	}
}

export default card