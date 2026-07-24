import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "グライガー",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "いつもは 崖に 張りついている。 獲物を見つけると 羽を広げ 風に乗り 襲いかかってくる。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "フリーフライト" },
			effect: {
				ja: "このポケモンにエネルギーがついていないなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "しのびのひとつき" },
			damage: "30+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "この番、手札から「アンズ」を出して使っていたなら、90ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558210,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [207],
};

export default card;
