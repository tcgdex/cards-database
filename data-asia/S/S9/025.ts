import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "波加曼",
		ja: "ポッチャマ"
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "自尊心很強，討厭從人那裡接受食物。 長長的絨毛能抵禦寒冷。",
		ja: "プライドが 高く 人から 食べ物を もらう ことを 嫌う。 長い 産毛が 寒さを 防ぐ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "泡沫",
			ja: "あわ"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [393],

	thirdParty: {
		cardmarket: 605876
	}
}

export default card