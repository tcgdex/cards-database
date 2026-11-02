import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "エレキブル",
	},

	illustrator: "Rianti Hidayat",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "のしかかり" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "ボルテージハンマー" },
			damage: "60×",
			cost: ["Lightning", "Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている基本エネルギーを好きなだけトラッシュし、その枚数×60ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900107,
				tcgplayer: 709234,
			},
		},
	],

	evolveFrom: {
		ja: "エレブー",
	},

	retreat: 3,
	regulationMark: "J",
	rarity: "Mega Hyper Rare",
	dexId: [466],
};

export default card;
