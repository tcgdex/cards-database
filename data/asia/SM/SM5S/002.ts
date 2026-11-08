import { Card } from "models/database/card";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メガヤンマ",
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'ja-jp': "６本の 脚で 大人を 抱えて 楽々と 飛ぶ ことが できる。 尻尾の 羽で バランスを とる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ちょうおんぱ" },
			damage: 30,
			cost: ["Grass"],
			effect: {
				'ja-jp': "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "カッターウインド" },
			damage: 120,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559956,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヤンヤンマ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [469],
};

export default card;
