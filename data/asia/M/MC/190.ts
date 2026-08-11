import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "トドゼルガ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	description: {
		'ja-jp': "２、３０匹で 群れを つくる。 敵に 襲われると リーダーは 体を 張って 群れを 守る。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "とうけつファング" },
			damage: 60,
			cost: ["Water"],
			effect: {
				'ja-jp': "次の相手の番、ついているエネルギーが2個以下のポケモン全員は、ワザが使えない。（新しく場に出したポケモンもふくむ。）",
			},
		},
		{
			name: { ja: "メガトンフォール" },
			damage: 170,
			cost: ["Water", "Water"],
			effect: {
				'ja-jp': "このポケモンにも50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863486,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "トドグラー",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [365],
};

export default card;
