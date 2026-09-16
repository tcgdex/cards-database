import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "シャンデラ",
	},

	illustrator: "Yoshioka",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "シャンデラの 炎に 包まれると 魂が 吸い取られ 燃やされる。 抜け殻の 体 だけが 残る。",
	},

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
			type: "normal",
			thirdParty: {
				cardmarket: 908240,
			},
		},
	],

	evolveFrom: {
		ja: "ランプラー",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [609],
};

export default card;
