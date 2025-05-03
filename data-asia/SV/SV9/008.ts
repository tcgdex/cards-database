import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "チョボマキ",
		'zh-tw': "小嘴蝸",
		'zh-cn': "小嘴蝸"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [616],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "電気 エネルギーに 反応する 不思議な 体質。 カブルモと ともに いると なぜか 進化する。",
		'zh-tw': "有著會對電能產生反應 的奇異體質。不知為何， 和蓋蓋蟲待在一起就會進化。",
		'zh-cn': "有著會對電能產生反應 的奇異體質。不知為何， 和蓋蓋蟲待在一起就會進化。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "シェルヒット",
			'zh-tw': "硬殼一擊",
			'zh-cn': "硬殼一擊"
		},

		damage: 20,

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害。",
			'zh-cn': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card