import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "リトライバッジ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分の番ごとに1回、このカードをつけている[C]ポケモンのワザで自分がコインを投げたとき、そのコインの結果をすべてなくし、はじめからコインを投げなおしてよい。",
	},

	variants: [{ type: "normal" }],

	trainerType: "Tool",
	regulationMark: "J",
	rarity: "Uncommon",

	thirdParty: {
		cardmarket: 888346,
	},
};

export default card;
