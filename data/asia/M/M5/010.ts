import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "カルボウ",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "戦いになると 火力が 上がり 摂氏１０００度に 達する。 油分の多い 木の実を 好む。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぜんりょくパンチ" },
			damage: 40,
			cost: ["Fire"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888247,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Common",
	dexId: [935],
};

export default card;
