import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "黑馬蕾冠王V"
	},

	illustrator: "D.A.G Inc.",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "暗影薄霧"
		},

		effect: {
			'zh-tw': "在下個對手的回合，對手無法從手牌附上「特殊能量」，也無法使出「競技場」。"
		},

		damage: 10,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "星碎"
		},

		effect: {
			'zh-tw': "在對手的2隻寶可夢身上各放置5個傷害指示物。"
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card