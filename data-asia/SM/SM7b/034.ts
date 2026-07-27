import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "アブリー",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 30,
	types: ["Fairy"],

	description: {
		ja: "花に 似た オーラを 持つ 人の 頭の 上には たくさんの アブリーが 集まってくるよ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あまいかおり" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のポケモン1匹のHPを「30」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558859,
			},
		},
	],

	retreat: 0,
	rarity: "Common",
	dexId: [742],
};

export default card;
