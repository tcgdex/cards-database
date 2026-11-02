import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "イワーク",
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "地中を ものすごい 勢いで 掘りすすみ エサを 探す。通った 跡は ディグダの 住処になる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ほりあてる" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュにあるエネルギーを1枚、相手に見せてから、手札に加える。",
			},
		},
		{
			name: { ja: "テールスマッシュ" },
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555194,
			},
		},
	],

	retreat: 4,
	regulationMark: "C",
	rarity: "Common",
	dexId: [95],
};

export default card;
