import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "フラエッテ",
	},

	illustrator: "mingo",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "自分の エネルギーを 赤色の 波長に 乗せて 花へ 送り 潜在能力を 引き出すのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ちいさなおつかい" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から基本エネルギーを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "かいてんアタック" },
			damage: 40,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863631,
			},
		},
	],

	evolveFrom: {
		ja: "フラベベ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [670],
};

export default card;
