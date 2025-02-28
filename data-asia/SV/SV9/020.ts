import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "オクタン",
		'zh-tw': "章魚桶",
		'zh-cn': "章魚桶"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [224],
	hp: 110,
	types: ["Water"],

	description: {
		ja: "頑丈な 石頭。 吸盤つきの 脚を 絡ませ ひたすら 頭で 打ちすえる。",
		'zh-tw': "有著堅硬結實的腦袋。 會用帶有吸盤的腳纏住對手， 然後不停地用頭猛撞。",
		'zh-cn': "有著堅硬結實的腦袋。 會用帶有吸盤的腳纏住對手， 然後不停地用頭猛撞。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "アクアウォッシャー",
			'zh-tw': "水流清洗",
			'zh-cn': "水流清洗"
		},

		damage: 20,

		effect: {
			ja: "のぞむなら、相手のバトルポケモンについているエネルギーを1個選び、相手の手札にもどす。",
			'zh-tw': "若希望，選擇1個對手的戰鬥寶可夢身上附加的能量，放回對手的手牌。",
			'zh-cn': "若希望，選擇1個對手的戰鬥寶可夢身上附加的能量，放回對手的手牌。"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "たこなぐり",
			'zh-tw': "狂擊",
			'zh-cn': "狂擊"
		},

		damage: "90×",

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数×90ダメージ。",
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×90點傷害。",
			'zh-cn': "擲硬幣直到出現反面，造成正面出現的次數×90點傷害。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card