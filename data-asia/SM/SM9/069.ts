import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "ピジョン",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "足の ツメが 発達している。 エサの タマタマを つかんで １００キロ先の 巣まで 運ぶ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "エアメール" },
			effect: {
				ja: "自分の番に1回使える。自分の山札を上から2枚見て、どちらか1枚を手札に加える。残りのカードは、山札の下にもどす。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かぜおこし" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558421,
			},
		},
	],

	evolveFrom: {
		ja: "ポッポ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [17],
};

export default card;
