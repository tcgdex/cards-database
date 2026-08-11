import { Card } from "models/database/card";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "リトライバッジ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の番ごとに1回、このカードをつけている[C]ポケモンのワザで自分がコインを投げたとき、そのコインの結果をすべてなくし、はじめからコインを投げなおしてよい。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888346,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "J",
	rarity: "Uncommon",
};

export default card;
