import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "魅力喵",
		ja: "ニャルマー"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "以漩渦狀的尾巴及眼力迷惑人心。暗藏的爪子也十分銳利，一旦 與之為敵將會非常棘手。",
		ja: "渦状の尻尾 及び 眼力にて 人を 惑わす。 隠し持つ 爪も 鋭利ゆえ 敵に回すと 極めて 厄介。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "擊掌奇襲",
			ja: "ねこだまし"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [431],

	thirdParty: {
		cardmarket: 609827
	}
}

export default card