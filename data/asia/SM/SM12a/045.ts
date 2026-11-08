import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シママ",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'ja-jp': "放電すると たてがみが 光る。 たてがみが 輝く 回数や リズムで 仲間と 会話している。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はねまわる" },
			damage: 10,
			cost: ["Lightning"],
		},
		{
			name: { ja: "エレキック" },
			damage: 20,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543696,
			},
		},
	],

	retreat: 1,
	regulationMark: "B",
	rarity: "None",
	dexId: [522],
};

export default card;
