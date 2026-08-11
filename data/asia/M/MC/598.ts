import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マメパト",
	},

	illustrator: "Tomomi Ozaki",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'ja-jp': "トレーナーの 命令を よく 聞く 性格だが 難しい 指示は 理解 できない こともある。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "さぐる" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手の手札を見る。",
			},
		},
		{
			name: { ja: "ふむ" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863900,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [519],
};

export default card;
