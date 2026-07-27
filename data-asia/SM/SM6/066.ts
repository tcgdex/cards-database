import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ヌメラ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 50,
	types: ["Dragon"],

	description: {
		ja: "ヌメヌメの 粘膜で 身を 守る。 粘膜は 雑菌まみれ なので 触ったら しっかり 手を 洗おう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みずかけ" },
			damage: 10,
			cost: ["Water"],
		},
		{
			name: { ja: "じたばた" },
			damage: "10×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンの数x10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559611,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [704],
};

export default card;
