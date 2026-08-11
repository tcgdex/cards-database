import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マニューラ",
	},

	illustrator: "aspara",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		'ja-jp': "４～５匹の グループで 行動。 岩や 樹木に サインを 残し 連係して 獲物を 仕留める。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "きりさく" },
			damage: 40,
			cost: ["Water"],
		},
		{
			name: { ja: "ヘイルクロー" },
			damage: 70,
			cost: ["Water", "Water"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーをすべてトラッシュし、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863467,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ニューラ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [461],
};

export default card;
