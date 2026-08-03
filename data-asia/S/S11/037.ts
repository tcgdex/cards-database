import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ロトムV",
		'zh-tw': "洛托姆V",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "そくせきじゅうでん",
				'zh-tw': "即刻充電",
			},
			effect: {
				ja: "自分の番に1回使えて、使ったなら、自分の番は終わる。自分の山札を3枚引く。",
				'zh-tw': "在自己的回合時可使用1次，若使用，則自己的回合結束。從自己的牌庫抽出3張卡。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "スクラップショート",
				'zh-tw': "廢鐵短路",
			},
			damage: "40+",
			cost: ["Lightning", "Lightning"],
			effect: {
				ja: "自分のトラッシュにある「ポケモンのどうぐ」を好きなだけロストゾーンに置き、その枚数×40ダメージ追加。",
				'zh-tw': "將自己的棄牌區的任意數量的「寶可夢道具」放置於放逐區，增加其張數×40點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 667912,
				tcgplayer: 569968,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [479],
};

export default card;
