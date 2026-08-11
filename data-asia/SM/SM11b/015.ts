import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "オニシズクモ",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "普段は 水の中で 過ごす。 満腹の とき 仕留めた 獲物は 頭の 水泡に 仕舞っておく。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ヘッドバット" },
			damage: 40,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "アクアブレイク" },
			damage: 80,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このワザを受けたポケモンが受けるワザのダメージは「+60」される。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555151,
			},
		},
	],

	evolveFrom: {
		ja: "シズクモ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [752],
};

export default card;
