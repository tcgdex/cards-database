import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サンダースex",
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
				'ja-jp': "のぞむなら、自分のベンチポケモンについている基本エネルギーを2枚までトラッシュし、その枚数×90ダメージ追加。",
			},
		},
		{
			name: { ja: "ドラバイト" },
			damage: 280,
			cost: ["Fire", "Water", "Lightning"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
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
		'ja-jp': "イーブイ",
	},

	retreat: 0,
	regulationMark: "H",
	rarity: "None",
	dexId: [135],

	suffix: "EX",
};

export default card;
