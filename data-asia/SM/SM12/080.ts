import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "ウォーグル",
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "向こう傷の 多い ものほど 勇敢とされ 後ろ傷の 多い ものは 群れで バカに される。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "わしづかみ" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "エアロフォール" },
			damage: 140,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、2個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554988,
			},
		},
	],

	evolveFrom: {
		ja: "ワシボン",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [628],
};

export default card;
