import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "迷你芙",
		'zh-cn': "迷你芙",
		ja: "ミニーブ"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "會從頭上的果實噴出油 來保護自己不受敵人攻擊。 油的味道苦澀到會讓人跳起來。",
		'zh-cn': "會從頭上的果實噴出油 來保護自己不受敵人攻擊。 油的味道苦澀到會讓人跳起來。",
		ja: "頭の 実から オイルを 出して 敵から 身を 守る。 オイルは とびあがるほど 苦くて 渋い。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "衝撞",
			'zh-cn': "衝撞",
			ja: "ぶつかる"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [928]
}

export default card