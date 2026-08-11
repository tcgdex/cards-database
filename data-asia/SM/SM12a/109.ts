import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "イーブイ",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "イーブイだけが とても 不安定な 遺伝子を 持っている 理由は 未だ 解明 されて いない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "しっぽにとまれ" },
			cost: ["Colorless"],
			effect: {
				ja: "分の山札にある「イーブイ（GXをふくむ）」を好きなだけ、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "たいあたり" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544181,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "None",
	dexId: [133],
};

export default card;
