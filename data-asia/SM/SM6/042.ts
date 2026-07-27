import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤンチャム",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "咥えている 葉っぱに 意味は なく ただの かっこつけ。 やんちゃなので 素人トレーナーには 向かない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ワルぶる" },
			damage: "10+",
			cost: ["Fighting"],
			effect: {
				ja: "このポケモンに[悪]エネルギーがついているなら、30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559587,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [674],
};

export default card;
