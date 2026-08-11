import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ マルマインV",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かんしゃくボム" },
			damage: "100×",
			cost: [],
			effect: {
				ja: "このポケモンが受けている特殊状態の数×100ダメージ。",
			},
		},
		{
			name: { ja: "ソーラーシュート" },
			damage: 120,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、すべてトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 657057,
				tcgplayer: 570741,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Ultra Rare",
	dexId: [101],
};

export default card;
