import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ブラッキーVMAX",
		'zh-tw': "月亮伊布VMAX",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 310,
	types: ["Darkness"],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ダークシグナル",
				'zh-tw': "黑暗信號",
			},
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
				'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ダイアーク",
				'zh-tw': "極巨惡霸",
			},
			damage: 160,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586617,
				tcgplayer: 571354,
			},
		},
	],

	evolveFrom: {
		ja: "ブラッキーV",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [197],
};

export default card;
