import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "カナザワのピカチュウ",
		'zh-tw': "伊布",
	},

	illustrator: "Fuzichoco",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "つくる 電気が 強力な ピカチュウほど ほっぺの 袋は 軟らかく よく 伸びるぞ。",
		'zh-tw': "由於不穩定的基因，蘊含著各式各樣進化可能性的特殊寶可夢。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ニューオープン",
				'zh-tw': "布搜索",
			},
			cost: ["Colorless"],
			effect: {
				ja: "おたがいのプレイヤーは、それぞれ自分の山札を上から1枚オモテにして、相手に見せて、手札に加える。",
				'zh-tw': "從自己的牌庫選擇最多3張「寶可夢【V】」卡，在給對手看過後加入手牌。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "ピカさんぽ",
				'zh-tw': "踩",
			},
			damage: "30+",
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525400,
				tcgplayer: 597343,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [25],
};

export default card;
