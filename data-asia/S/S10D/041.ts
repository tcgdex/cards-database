import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒスイ ダイケンキ",
		'zh-tw': "洗翠 大劍鬼"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [503],
	hp: 170,
	types: ["Darkness"],

	evolveFrom: {
		ja: "フタチマル"
	},

	description: {
		ja: "非情なる 気質と 太刀筋を 有す。 怒涛の 連撃は 千重波の 如し。 ヒスイにて 進化せし 稀有なる姿。",
		'zh-tw': "性情與刀路皆是殘酷無情。連綿不斷的攻擊彷如千層浪濤。 此乃只在洗翠進化而成的稀有姿態。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "わざしのかまえ",
			'zh-tw': "謀士之勢"
		},

		effect: {
			ja: "自分の番に、自分の手札を1枚トラッシュするなら、1回使える。自分の山札を3枚引く。",
			'zh-tw': "在自己的回合時，若將自己的1張手牌丟棄，則可使用1次。從自己的牌庫抽出3張卡。"
		}
	}],

	attacks: [{
		name: {
			ja: "やみのごくい",
			'zh-tw': "暗之極意"
		},

		effect: {
			ja: "自分の場のポケモンについているエネルギーの数×20ダメージ追加。",
			'zh-tw': "增加自己的場上寶可夢身上附加的能量的數量×20點傷害。"
		},

		damage: "60+",
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651009,
				tcgplayer: 569796,
				cardtrader: 234107,
			},
		},
	]
}

export default card