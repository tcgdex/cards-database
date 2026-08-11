import { Card } from "models/database/card";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オドシシ",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'ja-jp': "ツノの 曲がり具合が まわりの 空気の 流れを 微妙に 変え 不思議な 空間を 作り出す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つのでまどわす" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "きょうかホーン" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンに「ポケモンのどうぐ」がついているなら、60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558708,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [234],
};

export default card;
