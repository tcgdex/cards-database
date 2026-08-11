import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャローダVSTAR",
		'zh-tw': "君主蛇VSTAR",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 270,
	types: ["Grass"],

	stage: "VSTAR",

	attacks: [
		{
			name: {
				ja: "ロイヤルミキサー",
				'zh-tw': "皇家攪拌",
			},
			damage: 190,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "自分の場のポケモンについているエネルギーを好きなだけ選び、自分のポケモンに好きなようにつけ替える。",
				'zh-tw': "選擇自己的場上寶可夢身上附加的任意數量的能量，以任意方式改附於自己的寶可夢身上。",
			},
		},
		{
			name: {
				ja: "スターワインダー",
				'zh-tw': "[VSTAR力量]星星旋繞",
			},
			damage: "60×",
			cost: ["Grass"],
			effect: {
				ja: "このポケモンについているエネルギーの数×60ダメージ。このポケモンをベンチポケモンと入れ替える。［対戦中、自分はVSTARパワーを1回しか使えない。］",
				'zh-tw': "造成這隻寶可夢身上附加的能量的數量×60點傷害。將這隻寶可夢與備戰寶可夢互換。[對戰中，己方只可使用1次【VSTAR】力量。]",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673003,
				tcgplayer: 570769,
			},
		},
	],

	evolveFrom: {
		ja: "ジャローダV",
	},

	retreat: 0,
	regulationMark: "F",
	rarity: "Triple Rare",
	dexId: [497],
};

export default card;
