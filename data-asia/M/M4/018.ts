import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "デリバード",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "尻尾で エサを 包んで 運ぶ。 山で 遭難した 人に エサを 分け与える 習性。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ハッピープレゼント" },
			cost: ["Colorless"],
			effect: {
				ja: "おたがいのプレイヤーは、のぞむなら、それぞれ自分の手札から基本エネルギーを3枚まで選び、自分のポケモンに好きなようにつける。（相手から行う。）",
			},
		},
		{
			name: { ja: "はばたく" },
			damage: 40,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876917,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [225],
};

export default card;
