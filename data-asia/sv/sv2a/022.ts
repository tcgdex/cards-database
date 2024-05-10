import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "オニドリル",
		'zh-tw': "大嘴雀"
	},

	illustrator: "Gemi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [22],
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "オニドリルの 縄張りで 食べ物を 持って 歩くのは 危険だ。 あっという 間に かっさらわれるぞ。",
		'zh-tw': "在大嘴雀的地盤上帶著食物走動是件危險的事， 食物轉眼間就會被奪走。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "くちばしキャッチ",
			'zh-tw': "鳥嘴捕捉"
		},

		effect: {
			ja: "自分の山札から好きなカードを3枚まで選び、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫任意選擇最多3張卡加入手牌。並且重洗牌庫。"
		}
	}, {
		cost: ["Colorless"],

		name: {
			ja: "スピードひこう",
			'zh-tw': "高速飛行"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card