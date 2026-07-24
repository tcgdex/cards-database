import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ルクシオ",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		ja: "鋭い ツメの 先には 強い 電気が 流れており ほんの少し かするだけで 相手を気絶させる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "でんじしょうがい" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、相手は手札からグッズを出して使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559832,
			},
		},
	],

	evolveFrom: {
		ja: "コリンク",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [404],
};

export default card;
