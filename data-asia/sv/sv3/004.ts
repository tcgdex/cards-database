import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ストライク",
		'zh-tw': "飛天螳螂"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [123],
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "切れ味 鋭い カマを 使って 草むらを 切り進む。 あまりに 速い 動きで 目が 追いつかない。",
		'zh-tw': "會用鋒利的鐮刀割開草叢前進。因為動作實在太快，甚至無法用肉眼看清。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "こうそくいどう",
			'zh-tw': "高速移動"
		},

		damage: 10,

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "いあいぎり",
			'zh-tw': "居合斬"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card