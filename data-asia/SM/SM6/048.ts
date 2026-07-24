import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ジガルデ",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "セルと 呼ばれる ジガルデの 一部が １０％ほど 集まった 姿。 時速１００キロで 地を 駆ける。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "だいちのオーラ" },
			effect: {
				ja: "このポケモンが使うワザのダメージは、弱点・抵抗力を計算しない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ピースメーカー" },
			damage: "30+",
			cost: ["Fighting"],
			effect: {
				ja: "相手の場に「ウルトラビースト」がいるなら、30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559593,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [718],
};

export default card;
