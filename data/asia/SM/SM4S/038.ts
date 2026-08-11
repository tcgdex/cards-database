import { Card } from "models/database/card";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ムックル",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'ja-jp': "たくさんの 群れで 行動する。 体は 小さいが 羽ばたく 力は 非常に 強い。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "むしさがし" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手の手札を見る。",
			},
		},
		{
			name: { ja: "はばたく" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560350,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [396],
};

export default card;
