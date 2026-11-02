import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "ガルーラ",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "お腹の 袋に 我が子を 入れて 守る。 子どもを 傷つけた者は 絶対に 許さず 叩きのめす。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "しんかそくせい" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にある進化ポケモンを2枚まで、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "メガトンパンチ" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558431,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [115],
};

export default card;
