import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "キリンリキ",
		'zh-tw': "麒麟奇"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [203],
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "尻尾の 脳は とても 小さいが 強力な エスパーパワーを 発揮する 大事な 器官なのだ。",
		'zh-tw': "尾巴上的腦雖然很小，但卻是可以發揮出 強大超能力的重要器官。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ねんりき",
			'zh-tw': "念力"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ヘッドバング",
			'zh-tw': "鐵頭碰"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card