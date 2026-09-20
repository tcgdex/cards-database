import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ストリンダー",
	},

	illustrator: "Yuriko Akase",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		ja: "荒々しく 胸もとの 突起を かき鳴らして 放つ 電撃は １５０００ボルトを 軽く 超える。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "なぐる" },
			damage: 40,
			cost: ["Lightning"],
		},
		{
			name: { ja: "サンダーボルト" },
			damage: 150,
			cost: ["Lightning", "Colorless", "Colorless"],
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
				cardmarket: 908229,
			},
		},
	],

	evolveFrom: {
		ja: "エレズン",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [849],
};

export default card;
