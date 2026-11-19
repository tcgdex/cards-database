import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "コイル",
		'zh-tw': "小磁怪"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	dexId: [81],
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "鉄球に 一つ目ありし 奇天烈な姿。 馬蹄形の 磁石が如き 腕から 発する 磁力により 浮遊すると 推察す。",
		'zh-tw': "鐵球上長著一隻眼睛的相貌可謂奇異。 據推測，牠是靠著馬蹄形磁鐵般的 雙臂發出的磁力讓自己保持懸浮。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "マグネキャッチ",
			'zh-tw': "磁力捕捉"
		},

		effect: {
			ja: "自分のトラッシュから{M}エネルギーを3枚まで選び、相手に見せて、山札にもどして切る。",
			'zh-tw': "從自己的棄牌區選擇最多3張【鋼】能量卡，在給對手看過後放回牌庫並重洗。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "ボールアタック",
			'zh-tw': "滾球攻擊"
		},

		damage: 30,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651012,
				tcgplayer: 569799,
				cardtrader: 234110,
			},
		},
	]
}

export default card