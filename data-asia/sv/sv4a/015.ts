import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ミニーブ",
		'zh-tw': "迷你芙"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	dexId: [928],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "頭の 実から オイルを 出して 敵から 身を 守る。 オイルは とびあがるほど 苦くて 渋い。",
		'zh-tw': "會從頭上的果實噴出油來保護自己不受敵人攻擊。 油的味道苦澀到會讓人跳起來。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "えいようそ",
			'zh-tw': "營養素"
		},

		effect: {
			ja: "自分のポケモン1匹のHPを「30」回復する。",
			'zh-tw': "將自己的1隻寶可夢恢復「30」HP。"
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "しるをとばす",
			'zh-tw': "噴汁"
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