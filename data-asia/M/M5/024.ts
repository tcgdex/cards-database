import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "デンヂムシ",
	},

	illustrator: "Kazuhisa Uragami",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		ja: "食べた 落ち葉を 消化するとき 発電して 電気を 溜めこむ。 あごの 先端から 放電する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "はさむ" },
			damage: 30,
			cost: ["Lightning"],
		},
		{
			name: { ja: "ぶつかる" },
			damage: 50,
			cost: ["Lightning", "Lightning"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888266,
			},
		},
	],

	evolveFrom: {
		ja: "アゴジムシ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Common",
	dexId: [737],
};

export default card;
