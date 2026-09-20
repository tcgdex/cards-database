import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "シャンデラ",
	},

	illustrator: "YASHIRO Nanaco",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "あやしいともしび" },
			damage: 130,
			cost: ["Psychic", "Psychic"],
			effect: {
				ja: "相手のバトルポケモンをやけどとこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908290,
			},
		},
	],

	evolveFrom: {
		ja: "ランプラー",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [609],
};

export default card;
