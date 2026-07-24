import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ポリゴン2",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		ja: "ＡＩを 搭載。 自力で 様々なことを 学んでいくが 余計なことまで 覚えだす。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ダブルドロー" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を2枚引く。",
			},
		},
		{
			name: { ja: "かいてんアタック" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544191,
			},
		},
	],

	evolveFrom: {
		ja: "ポリゴン",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "None",
	dexId: [233],
};

export default card;
