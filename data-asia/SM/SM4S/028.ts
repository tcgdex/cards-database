import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "カラカラ",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "死に別れた 母を 思いだして 大声で 泣く。 声を聞きつけた バルジーナに 空から 狙われる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "にらみつける" },
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "ずつき" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560340,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [104],
};

export default card;
