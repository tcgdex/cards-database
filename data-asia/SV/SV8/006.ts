import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ビビヨン",
		'zh-tw': "彩粉蝶",
		'zh-cn': "彩粉蝶"
	},

	illustrator: "Amelicart",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [666],
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "不思議な 土地で 生まれた。 色鮮やかな 毒の りんぷんを 翅から 散らして 戦う。",
		'zh-tw': "誕生在神奇的地方。 會從翅膀灑出色彩鮮豔的 毒鱗粉來戰鬥。",
		'zh-cn': "誕生在神奇的地方。 會從翅膀灑出色彩鮮豔的 毒鱗粉來戰鬥。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "エボルパウダー",
			'zh-tw': "進化粉",
			'zh-cn': "進化粉"
		},

		effect: {
			ja: "自分のベンチポケモン全員からそれぞれ進化するカードを、自分の山札から1枚ずつ選び、それぞれにのせて進化させる。そして山札を切る。",
			'zh-tw': "從自己的牌庫，選擇自己的所有備戰寶可夢進化而來的卡各1張，放置於各自身上完成進化。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫，選擇自己的所有備戰寶可夢進化而來的卡各1張，放置於各自身上完成進化。並且重洗牌庫。"
		}
	}, {
		cost: ["Grass"],

		name: {
			ja: "カッターウインド",
			'zh-tw': "利刃之風",
			'zh-cn': "利刃之風"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card