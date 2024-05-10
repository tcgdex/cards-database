import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ミニーブ",
		'zh-tw': "迷你芙"
	},

	illustrator: "yuu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [928],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "頭の 実から オイルを 出して 敵から 身を 守る。 オイルは とびあがるほど 苦くて 渋い。",
		'zh-tw': "會從頭上的果實噴出油來保護自己不受敵人攻擊。 油的味道苦澀到會讓人跳起來。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "たいあたり",
			'zh-tw': "撞擊"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card