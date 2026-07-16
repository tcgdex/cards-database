import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼラオラ",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "両手足の ツメを 帯電させ 相手を 八つ裂き。 かわされても 飛び散る 電撃で 感電させる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "クラッシュクロー" },
			damage: 20,
			cost: ["Lightning"],
			effect: {
				ja: "相手のバトルポケモンについている特殊エネルギーを、1個トラッシュする。",
			},
		},
		{
			name: { ja: "ほうでん" },
			damage: "50×",
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[雷]エネルギーをすべてトラッシュし、その枚数x50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543736,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "None",
	dexId: [807],
};

export default card;
