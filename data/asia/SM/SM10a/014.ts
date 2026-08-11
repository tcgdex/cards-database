import { Card } from "models/database/card";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "フワンテ",
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'ja-jp': "丸い 身体の 中に たくさんの 魂が 詰まっている。 誰かを 道連れにするたび 膨らんでいく。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557293,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [425],
};

export default card;
