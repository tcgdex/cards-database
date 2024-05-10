import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "バチンウニ",
		'zh-tw': "啪嚓海膽"
	},

	illustrator: "miki kudo",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [871],
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "エサを 消化するときに 電気を 生みだす。 ５本の 硬い 歯で 海藻を こそぎ落とし 食べる。",
		'zh-tw': "消化食物時會製造出電力。５顆堅硬的牙齒能用來 把海藻連根拔起來吃。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "しびればり",
			'zh-tw': "麻痺針"
		},

		damage: 20,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		}
	}, {
		cost: ["Lightning"],

		name: {
			ja: "ついげきバリバリ",
			'zh-tw': "啪啪追擊"
		},

		damage: 100,

		effect: {
			ja: "このワザは、前の自分の番に、このポケモンが「しびればり」を使っていなければ使えない。",
			'zh-tw': "這個招式必須在上個自己的回合這隻寶可夢使用了「麻痺針」才可使用。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card