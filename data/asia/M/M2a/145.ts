import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "テラパゴスex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ユニオンビート" },
			damage: "30×",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "このワザは、後攻プレイヤーの最初の番には使えない。自分のベンチポケモンの数×30ダメージ。",
			},
		},
		{
			name: { ja: "クラウンオパール" },
			damage: 180,
			cost: ["Grass", "Water", "Lightning"],
			effect: {
				'ja-jp': "次の相手の番、このポケモンはたねポケモン（[C]ポケモンをのぞく）からワザのダメージを受けない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 861388,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [1024],

	suffix: "EX",
};

export default card;
