import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "サンダースex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Lightning"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "フラッシュスピア" },
			damage: "60+",
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "のぞむなら、自分のベンチポケモンについている基本エネルギーを2枚までトラッシュし、その枚数×90ダメージ追加。",
			},
		},
		{
			name: { ja: "ドラバイト" },
			damage: 280,
			cost: ["Fire", "Water", "Lightning"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863534,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 0,
	regulationMark: "H",
	rarity: "None",
	dexId: [135],

	suffix: "EX",
};

export default card;
