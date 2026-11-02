import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "サニーゴ",
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "頭の 枝を 狙い ヒドイデが 追いかけてくると 自分で 枝を ポキリと 折って 逃げだすよ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なかまをよぶ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にあるたねポケモンを2枚まで、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "なみのり" },
			damage: 60,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561613,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [222],
};

export default card;
