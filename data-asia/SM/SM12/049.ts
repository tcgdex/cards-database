import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "スナバァ",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "頭の スコップは お気に入り。 取り返しに 来た 子どもと ケンカ。 ムキに なって 殴り合いに なる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おどろかす" },
			damage: 10,
			cost: ["Fighting"],
			effect: {
				ja: "相手の手札からオモテを見ないで1枚選び、そのカードのオモテを見てから、相手の山札にもどして切る。",
			},
		},
		{
			name: { ja: "ひっかける" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554897,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [769],
};

export default card;
