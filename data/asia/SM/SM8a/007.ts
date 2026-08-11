import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "シママ",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "放電すると たてがみが 光る。 たてがみが 輝く 回数や リズムで 仲間と 会話している。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おとどけダッシュ" },
			cost: ["Lightning"],
			effect: {
				ja: "自分の山札にある「エレキパワー」を2枚まで、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "エレキック" },
			damage: 20,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558581,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [522],
};

export default card;
