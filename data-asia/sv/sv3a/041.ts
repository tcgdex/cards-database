import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "フォクスライ",
		'zh-tw': "狐大盜"
	},

	illustrator: "SIE NANAHARA",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [828],
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "身軽な 体と 鋭い ツメで エサや タマゴを 盗んで まわる。 パルスワンが 天敵。",
		'zh-tw': "靠著輕盈的身體和銳利的爪子到處去偷食物和蛋。 逐電犬是牠的天敵。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ひったくり",
			'zh-tw': "強盜"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手の手札を見て、その中からエネルギーを2枚選び、相手の山札にもどして切る。",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。查看對手的手牌，從其中選擇2張能量卡，放回對手的牌庫並重洗。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ツメできりさく",
			'zh-tw': "利爪劈擊"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card