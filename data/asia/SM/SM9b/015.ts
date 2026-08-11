import { Card } from "models/database/card";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アーボック",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'ja-jp': "最新の 研究で お腹の 模様は ２０種類 以上の パターンが あることが 判明。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "まきつく" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "ヘビーチョーク" },
			damage: "50+",
			cost: ["Psychic", "Colorless"],
			effect: {
				'ja-jp': "前の自分の番、このポケモンが「まきつく」を使っていたなら、120ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558133,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "アーボ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [24],
};

export default card;
