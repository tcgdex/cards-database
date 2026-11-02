import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "カゲボウズ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "恨みの 感情が 大好き。 恨みを 持つ 人が 住む 家の 軒下に ずらりと ぶらさがる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ずつき" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "おにび" },
			damage: 20,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559180,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [353],
};

export default card;
