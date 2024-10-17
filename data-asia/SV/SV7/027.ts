import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "輕身鱈",
		'zh-cn': "輕身鱈",
		ja: "ミガルーサ"
	},

	illustrator: "GOTO minori",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		'zh-tw': "擁有強大的再生能力。 會丟棄身上的贅肉讓自己 變得輕盈後突擊獵物。",
		'zh-cn': "擁有強大的再生能力。 會丟棄身上的贅肉讓自己 變得輕盈後突擊獵物。",
		ja: "高い 再生能力を 持つ。 体の 贅肉を 捨てて 身軽になり 獲物に 突撃。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "音波刀鋒",
			'zh-cn': "音波刀鋒",
			ja: 'ソニックエッジ'
		},

		effect: {
			ja: 'このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。',
			'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。",
			'zh-cn': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。"
		},

		damage: 110,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [976],

	abilities: [{
		type: "Ability",
		name: {
			'zh-tw': "‌[特性]事先準備",
			'zh-cn': "‌[特性]事先準備",
			ja: "したごしらえ"
		},

		effect: {
			'zh-tw': "這隻寶可夢使用招式所需的【無】能量，減少自己的棄牌區的「海岱」的張數。",
			'zh-cn': "這隻寶可夢使用招式所需的【無】能量，減少自己的棄牌區的「海岱」的張數。",
			ja: "自分のトラッシュにある「ハイダイ」の枚数ぶん、このポケモンがワザを使うためのエネルギーは少なくなる。"
		}
	}]
}

export default card
