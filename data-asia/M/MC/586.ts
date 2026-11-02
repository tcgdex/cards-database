import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "エネコロロ",
	},

	illustrator: "buchi",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "汚い 場所が 大嫌い。 居心地の 良い 場所で いつも 毛並みを 手入れしている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ねこキック" },
			damage: 40,
			cost: ["Colorless"],
		},
		{
			name: { ja: "エナジークラッシュ" },
			damage: "40×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン全員についているエネルギーの数×40ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863888,
			},
		},
	],

	evolveFrom: {
		ja: "エネコ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [301],
};

export default card;
