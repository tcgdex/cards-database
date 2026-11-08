import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メガシビルドンex",
	},

	illustrator: "akagi",
	category: "Pokemon",
	hp: 350,
	types: ["Lightning"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ばくれつだん" },
			cost: ["Lightning", "Lightning"],
			effect: {
				'ja-jp': "相手のポケモン2匹に、それぞれ60ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "ディザスターショック" },
			damage: 190,
			cost: ["Lightning", "Lightning", "Lightning"],
			effect: {
				'ja-jp': "のぞむなら、このポケモンについている[L]エネルギーを2個トラッシュし、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 861478,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "シビビール",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Special illustration rare",
	dexId: [604],

	suffix: "EX",
};

export default card;
