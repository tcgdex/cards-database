import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "レントラーex",
		'zh-tw': "倫琴貓ex",
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "つきさすがんこう",
				'zh-tw': "突刺目光",
			},
			damage: 120,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手の手札を見て、その中からカードを1枚選び、トラッシュする。",
				'zh-tw': "查看對手的手牌，從其中選擇1張卡，將其丟棄。",
			},
		},
		{
			name: {
				ja: "ボルトストライク",
				'zh-tw': "伏特強襲",
			},
			damage: 250,
			cost: ["Lightning", "Lightning"],
			effect: {
				ja: "このポケモンについているエネルギーを、すべてトラッシュする。",
				'zh-tw': "將這隻寶可夢身上附加的能量卡全部丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 767552,
				tcgplayer: 568108,
			},
		},
	],

	evolveFrom: {
		ja: "ルクシオ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Ultra Rare",
	dexId: [405],

	suffix: "EX",
};

export default card;
