import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ニャオニクス",
		'zh-tw': "超能妙喵",
		'zh-cn': "超能妙喵"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [678],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "強力な サイコパワーを 出し続けていると ニャオニクスの 肉体にも ダメージが およぶ。",
		'zh-tw': "如果持續不斷釋放強大的 精神力量，超能妙喵的 肉體也會受到傷害。",
		'zh-cn': "如果持續不斷釋放強大的 精神力量，超能妙喵的 肉體也會受到傷害。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "さそうしっぽ",
			'zh-tw': "誘導之尾",
			'zh-cn': "誘導之尾"
		},

		effect: {
			ja: "自分の番に、自分の手札から「のんびりじゃらし」を1枚トラッシュするなら、1回使える。相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
			'zh-tw': "在自己的回合，若從自己的手牌將1張「悠哉尾草棒」丟棄，則可使用1次。選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
			'zh-cn': "在自己的回合，若從自己的手牌將1張「悠哉尾草棒」丟棄，則可使用1次。選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "サイコショット",
			'zh-tw': "精神射擊",
			'zh-cn': "精神射擊"
		},

		damage: 80
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
		cardmarket: 793488
	}
}

export default card