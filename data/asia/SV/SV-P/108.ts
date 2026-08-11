import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "サンダーex",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ボルトフロート" },
			effect: {
				ja: "このポケモンに[L]エネルギーがついているなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "いなずまれんだん" },
			damage: 120,
			cost: ["Lightning", "Lightning", "Lightning"],
			effect: {
				ja: "ダメカンがのっている相手のベンチポケモン1匹にも、90ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 725816,
				tcgplayer: 587858,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [145],

	suffix: "EX",
};

export default card;
