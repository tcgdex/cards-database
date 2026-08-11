import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ポッポ",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "森や 林に 多く 分布。 地上でも 激しく はばたいて 砂を かけたりする。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "もってくる" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を1枚引く。",
			},
		},
		{
			name: { ja: "かぜおこし" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544151,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "None",
	dexId: [16],
};

export default card;
