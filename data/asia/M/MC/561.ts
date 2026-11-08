import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ラッキー",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'ja-jp': "持っている タマゴを 割らないように 気をつけて 歩く。 でも 逃げ足は とても 速い。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ラッキーアタッチ" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の手札から基本エネルギーを1枚選び、自分のポケモンにつける。",
			},
		},
		{
			name: { ja: "そこぢから" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863863,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [113],
};

export default card;
