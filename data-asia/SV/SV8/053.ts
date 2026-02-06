import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ニャスパー",
		'zh-tw': "妙喵",
		'zh-cn': "妙喵"
	},

	illustrator: "Natsumi Yoshida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [677],
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "無表情だが 内面では サイコパワーを 抑えこむのに 必死に なっているのだ。",
		'zh-tw': "雖然看起來面無表情， 但其實內心正非常努力地 在控制自己的精神力量。",
		'zh-cn': "雖然看起來面無表情， 但其實內心正非常努力地 在控制自己的精神力量。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "みすかす",
			'zh-tw': "看透",
			'zh-cn': "看透"
		},

		effect: {
			ja: "相手の手札を見る。",
			'zh-tw': "查看對手的手牌。",
			'zh-cn': "查看對手的手牌。"
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "サイコショット",
			'zh-tw': "精神射擊",
			'zh-cn': "精神射擊"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 793487
	}
}

export default card