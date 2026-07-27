import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ヌメラ",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 40,
	types: ["Dragon"],

	description: {
		ja: "ヌメヌメの 粘膜で 身を 守る。 粘膜は 雑菌まみれ なので 触ったら しっかり 手を 洗おう。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ねばるねんまく" },
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手のポケモンが使うワザに必要なエネルギーは、[無]エネルギー1個ぶん多くなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 10,
			cost: ["Fairy"],
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559610,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [704],
};

export default card;
