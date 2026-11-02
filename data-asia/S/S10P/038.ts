import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "メレシー",
		'zh-tw': "小碎鑽",
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "体に 埋まっている 宝石から 高エネルギーの ビームを 放ち 襲いかかる 敵を 一掃する。",
		'zh-tw': "會從嵌在身體的寶石發射出高能量的光線， 將來襲的敵人一掃而盡。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ほりだしもの",
				'zh-tw': "挖到寶",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札からグッズを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多2張物品卡，在給對手看過後加入手牌。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "パワージェム",
				'zh-tw': "力量寶石",
			},
			damage: 80,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651097,
				tcgplayer: 569881,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [703],
};

export default card;
