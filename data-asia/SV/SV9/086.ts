import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ホップのバイウールー",
		'zh-tw': "赫普的毛毛角羊",
		'zh-cn': "赫普的毛毛角羊"
	},

	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [832],
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "立派に 伸びた ツノは 異性に アピールするために 生えている。 武器として 使うことはない。",
		'zh-tw': "長得長長的角是為了 向異性求愛而存在的。 牠從不會把角當作武器。",
		'zh-cn': "長得長長的角是為了 向異性求愛而存在的。 牠從不會把角當作武器。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "チャレンジホーン",
			'zh-tw': "挑戰角擊",
			'zh-cn': "挑戰角擊"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
			'zh-cn': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ずつき",
			'zh-tw': "頭錘",
			'zh-cn': "頭錘"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card