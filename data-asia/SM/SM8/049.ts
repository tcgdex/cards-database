import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ウソッキー",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "お年寄りを 中心に 人気。 緑の 部分が 大きいほど マニアの 評価は あがるらしい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つよめにかえす" },
			damage: "20+",
			cost: ["Fighting"],
			effect: {
				ja: "前の相手の番に、このポケモンがバトル場でワザのダメージを受けていたなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558688,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [185],
};

export default card;
