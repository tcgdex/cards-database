import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "フラベベ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 40,
	types: ["Fairy"],

	description: {
		ja: "気に入った 花を 見つけると 一生 その花と 暮らす。 風に 乗って 気ままに 漂う。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひみつのめぐみ" },
			cost: ["Fairy"],
			effect: {
				ja: "自分のトラッシュにあるポケモンと基本エネルギーを合計3枚、相手に見せてから、山札にもどして切る。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559603,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [669],
};

export default card;
