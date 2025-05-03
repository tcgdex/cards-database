import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "バリヤード",
		'zh-tw': "魔牆人偶",
		'zh-cn': "魔牆人偶"
	},

	illustrator: "GOTO minori",
	rarity: "Common",
	category: "Pokemon",
	dexId: [122],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "パントマイムが 得意。 指から 出した 波動で 壁を つくり あまたの 攻撃から 身を守る。",
		'zh-tw': "擅長表演默劇。 用手指放出的波動製造牆壁， 保護自己免於大多數的攻擊。",
		'zh-cn': "擅長表演默劇。 用手指放出的波動製造牆壁， 保護自己免於大多數的攻擊。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ものまね",
			'zh-tw': "模仿",
			'zh-cn': "模仿"
		},

		effect: {
			ja: "自分の手札をすべて山札にもどして切る。その後、相手の手札の枚数ぶん、自分の山札を引く。",
			'zh-tw': "將自己的手牌全部放回牌庫並重洗。然後，從自己的牌庫抽出與對手的手牌張數相同數量的卡。",
			'zh-cn': "將自己的手牌全部放回牌庫並重洗。然後，從自己的牌庫抽出與對手的手牌張數相同數量的卡。"
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ねんりき",
			'zh-tw': "念力",
			'zh-cn': "念力"
		},

		damage: 40,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			'zh-cn': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		}
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
	regulationMark: "I"
}

export default card