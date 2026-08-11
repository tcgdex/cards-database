import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "ハピナスex",
		'zh-tw': "幸福蛋ex",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 300,
	types: ["Colorless"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ハッピースイッチ",
				'zh-tw': "幸福切換",
			},
			effect: {
				ja: "自分の番に1回使える。自分の場のポケモンについている基本エネルギーを1個選び、自分の別のポケモンにつけ替える。",
				'zh-tw': "在自己的回合時可使用1次。選擇1個自己的場上寶可夢身上附加的基本能量，改附於自己的其他寶可夢身上。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "おんがえし",
				'zh-tw': "報恩",
			},
			damage: 180,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、自分の手札が6枚になるように、山札を引く。",
				'zh-tw': "若希望，從牌庫抽卡直到自己的手牌滿6張為止。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 767555,
				tcgplayer: 568111,
			},
		},
	],

	evolveFrom: {
		ja: "ラッキー",
	},

	retreat: 4,
	regulationMark: "H",
	rarity: "Ultra Rare",
	dexId: [242],

	suffix: "EX",
};

export default card;
