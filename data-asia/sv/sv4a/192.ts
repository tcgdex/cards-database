import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "クサイハナ",
		'zh-tw': "臭臭花"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	dexId: [44],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "よだれのように 見える 甘い蜜。 とても ねばねば しており 触れると いつまでも まとわりつく。",
		'zh-tw': "看似口水的東西其實是甜甜的蜜。非常黏稠， 只要碰到就會一直黏住。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "さんぶざきエナジー",
			'zh-tw': "三成能量"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札を上から3枚見て、その中から基本エネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。残りのカードは山札にもどして切る。",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。查看自己的牌庫上方3張卡，從其中選擇任意數量的基本能量卡，以任意方式附於自己的寶可夢身上。將剩餘卡放回牌庫並重洗。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "よだれ",
			'zh-tw': "口水"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card