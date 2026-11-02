import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "サンダース",
		'zh-tw': "雷伊布",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		ja: "怒ったり 驚いたりすると 全身の 毛が 針の ように 逆立って 相手を つらぬく。",
		'zh-tw': "當雷伊布生氣或是吃驚時，牠全身的體毛會像針一樣豎起來刺穿對手。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "じんらいのめざめ",
				'zh-tw': "迅雷覺醒",
			},
			effect: {
				ja: "このポケモンに「メモリーカプセル」がついているなら、おたがいの場の[水]ポケモンの特性は、すべてなくなる。",
				'zh-tw': "若這隻寶可夢身上附有「回憶膠囊」，則雙方的場上【水】寶可夢的特性全部消除。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ライトニングボール",
				'zh-tw': "雷電球",
			},
			damage: 90,
			cost: ["Lightning", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586565,
				tcgplayer: 571302,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578379,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 1,
	regulationMark: "D",
	rarity: "None",
	dexId: [135],
};

export default card;
