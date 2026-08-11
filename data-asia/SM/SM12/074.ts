import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "イーブイ",
	},

	illustrator: "Motofumi Fujiwara",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "イーブイだけが とても 不安定な 遺伝子を 持っている 理由は 未だ 解明 されて いない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みちびく" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にあるサポートを1枚、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "かみつく" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554968,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [133],
};

export default card;
