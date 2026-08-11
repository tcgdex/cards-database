import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ナンジャモのタイカイデン",
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'ja-jp': "のど袋を ふくらませて 電気を 増幅させる。 風に 乗って １日で ７００キロを 飛行する。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "フラッシュドロー" },
			effect: {
				'ja-jp': "自分の番に、このポケモンについている「基本[L]エネルギー」を1個トラッシュするなら、1回使える。自分の手札が6枚になるように、山札を引く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "マッハボルト" },
			damage: 70,
			cost: ["Lightning", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863575,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ナンジャモのカイデン",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [941],
};

export default card;
