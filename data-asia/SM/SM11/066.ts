import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ミニリュウ",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		ja: "まだ 弱いので 水底に 身を 潜め 沈んできた ものを 食らいながら ひそかに 暮らす。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "アクアフロート" },
			effect: {
				ja: "このポケモンに[水]エネルギーがついているなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "とびつく" },
			damage: "10+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557028,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [147],
};

export default card;
