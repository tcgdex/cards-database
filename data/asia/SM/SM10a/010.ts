import { Card } from "models/database/card";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アローラライチュウ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		'ja-jp': "サイコパワーを 集中させた シッポに乗り 滑るように 移動。 陸サーファーの 異名を 持つ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "エレキレイン" },
			cost: ["Lightning"],
			effect: {
				'ja-jp': "このポケモンについている[雷]エネルギーを好きなだけトラッシュし、その数ぶん、相手のポケモンを選ぶ（1匹を2回以上選べる）。その後、選んだポケモン全員に、弱点・抵抗力を計算せず、選んだ回数×30ダメージ。",
			},
		},
		{
			name: { ja: "ライトニングボール" },
			damage: 90,
			cost: ["Lightning", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557288,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ピカチュウ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [26],
};

export default card;
