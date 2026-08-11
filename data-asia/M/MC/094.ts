import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ブースターex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Fire"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "バーニングチャージ" },
			damage: 130,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "自分の山札から基本エネルギーを2枚まで選び、自分のポケモン1匹につける。そして山札を切る。",
			},
		},
		{
			name: { ja: "カーネリアン" },
			damage: 280,
			cost: ["Fire", "Water", "Lightning"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863388,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [136],

	suffix: "EX",
};

export default card;
