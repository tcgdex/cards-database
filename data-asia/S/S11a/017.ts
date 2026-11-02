import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "テールナー",
		'zh-tw': "長尾火狐",
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "木の枝を 尻尾から 引き抜くとき 摩擦で 着火。 枝の 炎を 振って 仲間に 合図を 送る。",
		'zh-tw': "將樹枝從尾巴拔出時，會因摩擦而起火。會揮動樹枝，以樹枝上面的火焰向夥伴發送信號。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "かえん",
				'zh-tw': "烈焰",
			},
			damage: 30,
			cost: ["Fire"],
		},
		{
			name: {
				ja: "フレアパレード",
				'zh-tw': "閃焰遊行",
			},
			damage: "60×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のトラッシュにある「セレナ」の枚数×60ダメージ。",
				'zh-tw': "造成自己的棄牌區的「莎莉娜」的張數×60點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673014,
				tcgplayer: 570780,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570870,
			},
		},
	],

	evolveFrom: {
		ja: "フォッコ",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [654],
};

export default card;
