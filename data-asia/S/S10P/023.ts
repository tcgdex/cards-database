import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "オリジンパルキアVSTAR",
		'zh-tw': "起源帕路奇亞VSTAR",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 280,
	types: ["Water"],

	stage: "VSTAR",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "スターポータル",
				'zh-tw': "星星入口",
			},
			effect: {
				ja: "自分の番に使える。自分のトラッシュから[W]エネルギーを3枚まで選び、自分の[W]ポケモンに好きなようにつける。［対戦中、自分はVSTARパワーを1回しか使えない。］",
				'zh-tw': "在自己的回合時可使用。從自己的棄牌區選擇最多3張【水】能量卡，以任意方式附於自己的【水】寶可夢身上。[對戰中，己方只可使用1次【VSTAR】力量。]",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "あくうのうねり",
				'zh-tw': "亞空潮漩",
			},
			damage: "60+",
			cost: ["Water", "Water"],
			effect: {
				ja: "おたがいのベンチポケモンの数×20ダメージ追加。",
				'zh-tw': "增加雙方的備戰寶可夢的數量×20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651082,
				tcgplayer: 569866,
			},
		},
	],

	evolveFrom: {
		ja: "nullV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Triple Rare",
	dexId: [484],
};

export default card;
