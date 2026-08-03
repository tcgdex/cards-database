import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャローダVSTAR",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 270,
	types: ["Grass"],

	stage: "VSTAR",

	attacks: [
		{
			name: { ja: "ロイヤルミキサー" },
			damage: 190,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "自分の場のポケモンについているエネルギーを好きなだけ選び、自分のポケモンに好きなようにつけ替える。",
			},
		},
		{
			name: { ja: "スターワインダー" },
			damage: "60×",
			cost: ["Grass"],
			effect: {
				ja: "このポケモンについているエネルギーの数×60ダメージ。このポケモンをベンチポケモンと入れ替える。［対戦中、自分はVSTARパワーを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673409,
				tcgplayer: 570855,
			},
		},
	],

	evolveFrom: {
		ja: "ジャローダV",
	},

	retreat: 0,
	regulationMark: "F",
	rarity: "Mega Hyper Rare",
	dexId: [497],
};

export default card;
