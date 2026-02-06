import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "圓陸鯊",
		ja: "フカマル"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		'zh-tw': "喜歡住在被地熱加溫的洞窟的小窄洞。這樣即使外面 刮著暴風雪，牠也不會受凍。",
		ja: "地熱で 暖められた 洞窟の 狭い 横穴を 好む。 外が 吹雪いていても 凍えずにすむのだ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬",
			ja: "かじる"
		},

		damage: 30,
		cost: ["Water", "Fighting"]
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [443],

	thirdParty: {
		cardmarket: 605924
	}
}

export default card