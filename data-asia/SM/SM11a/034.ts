import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤンチャム",
	},

	illustrator: "Motofumi Fujiwara",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "ゴロンダの あとを 子分の ように ついていく。 大きな 失敗を すると 葉っぱを 取られてしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "パンチ" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556657,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [674],
};

export default card;
