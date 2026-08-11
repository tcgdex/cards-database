import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "フリージオ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "雪雲の 中で 生まれた。 氷の 結晶で できた 鎖で 獲物を 捕まえる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "カチカチロック" },
			damage: 10,
			cost: ["Water"],
			effect: {
				ja: "次の相手の番、相手は手札からグッズを出して使えない。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557209,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [615],
};

export default card;
