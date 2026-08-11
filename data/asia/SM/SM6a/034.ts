import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "キュレム",
	},

	illustrator: "TOKIYA",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],

	description: {
		ja: "強力な 冷凍エネルギーを 体内で 作り出すが 漏れ出した 冷気で 体が 凍っている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "げきりん" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンの数x10ダメージ追加。",
			},
		},
		{
			name: { ja: "フロストスピア" },
			damage: 100,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559305,
			},
		},
	],

	retreat: 2,
	rarity: "Rare",
	dexId: [646],
};

export default card;
