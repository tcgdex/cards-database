import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "ポワルン",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "天気に よって 姿を 変える。 気温や 湿度の 変化が 細胞に 影響 するらしい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おてんきうらない" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にあるスタジアムを2枚まで、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "みずのはどう" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561445,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [351],
};

export default card;
