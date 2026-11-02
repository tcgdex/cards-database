import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ジオヅム",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "塩を 噴き出して 獲物に 浴びせ 塩漬けにしてしまう。 体内の 水分を 奪ってしまうのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "いわとばし" },
			damage: 50,
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "このワザのダメージは抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863719,
			},
		},
	],

	evolveFrom: {
		ja: "コジオ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [933],
};

export default card;
