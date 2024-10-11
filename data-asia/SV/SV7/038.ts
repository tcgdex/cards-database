import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "呆呆獸",
		'zh-cn': "呆呆獸",
		ja: "ヤドン"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		'zh-tw': "總是一副在發呆的樣子， 不知道在想些什麼。 擅長用尾巴來釣食物。",
		'zh-cn': "總是一副在發呆的樣子， 不知道在想些什麼。 擅長用尾巴來釣食物。",
		ja: "いつも ボーッとしていて なにを 考えているか わからない。 尻尾で エサを 釣るのが 得意。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "垂尾巴",
			'zh-cn': "垂尾巴",
			ja: "しっぽをたらす"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張寶可夢卡，在給對手看過後加入手牌。",
			'zh-cn': "從自己的棄牌區選擇1張寶可夢卡，在給對手看過後加入手牌。",
			ja: "自分のトラッシュからポケモンを1枚選び、相手に見せて、手札に加える。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "撞擊",
			'zh-cn': "撞擊",
			ja: "たいあたり"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [79]
}

export default card