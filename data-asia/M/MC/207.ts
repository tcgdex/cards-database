import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲコガシラ",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "泡で 包んだ 小石を 投げる 技を 使う。３０メートル 先の 空き缶に 当てる コントロール。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "スプラッシュ" },
			damage: 40,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863503,
			},
		},
	],

	evolveFrom: {
		ja: "ケロマツ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [657],
};

export default card;
