import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤドン",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "ヤドンの尻尾を 干したあと 塩水で 煮込んだ 料理は アローラの 家庭の 味。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あくび" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558663,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [79],
};

export default card;
