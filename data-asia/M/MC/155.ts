import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "カスミのヒトデマン",
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "魚ポケモンに ついばまれるが 体が ちぎれても すぐに 再生するので 気にしない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "バブルこうせん" },
			damage: 20,
			cost: ["Water"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863451,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [120],
};

export default card;
