import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ウォッシュロトム",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "プラズマで できた 体を 持つ。 電化製品に 潜りこみ 悪さを することで 知られている。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ロトモーター" },
			effect: {
				ja: "自分のトラッシュに「ポケモンのどうぐ」が9枚以上あるなら、このポケモンが使うワザに必要なエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ウォッシュアロー" },
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹に、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559825,
			},
		},
	],

	retreat: 1,
	rarity: "Uncommon",
	dexId: [479],
};

export default card;
