import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "ドゴーム",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "大声の 衝撃波で トラックを ひっくりかえしてしまう。 足を 踏みならして パワーアップ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "だみごえ" },
			damage: 60,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559034,
			},
		},
	],

	evolveFrom: {
		ja: "ゴニョニョ",
	},

	retreat: 3,
	rarity: "Common",
	dexId: [294],
};

export default card;
