import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "ズルッグ",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "皮を 首まで 引き上げて 防御の 姿勢。 ゴムのような 弾力で ダメージを 減らす。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なかまをよぶ" },
			cost: ["Darkness"],
			effect: {
				ja: "自分の山札にあるたねポケモンを1枚、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "ずつき" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560209,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [559],
};

export default card;
