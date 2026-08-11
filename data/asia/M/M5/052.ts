import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "フォクスライ",
	},

	illustrator: "GOTO minori",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "狙った 獲物は こっそり マーキング。 においを 辿って 油断 したころ 盗みに 来るぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "スキルシーフ" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の手札が1枚もないなら、相手の場のポケモンが持つワザを1つ選び、このワザとして使う。",
			},
		},
		{
			name: { ja: "するどいキバ" },
			damage: 80,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888307,
			},
		},
	],

	evolveFrom: {
		ja: "クスネ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [828],
};

export default card;
