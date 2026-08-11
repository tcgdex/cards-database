import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "ポッポ",
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "森や 林に 多く 分布。 地上でも 激しく はばたいて 砂を かけたりする。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "でんこうせっか" },
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、10ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558419,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [16],
};

export default card;
