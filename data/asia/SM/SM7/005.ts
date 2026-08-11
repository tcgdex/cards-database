import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "タネボー",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "枝に ぶらさがっていると 木の実に そっくり。 ついばもうとした ポケモンを 驚かせて 喜ぶ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぶらさがる" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "かたくなる" },
			cost: ["Grass"],
			effect: {
				ja: "次の相手の番、このポケモンは「40」以下のワザのダメージを受けない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558966,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [273],
};

export default card;
