import { Card } from "models/database/card";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ポリゴン",
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'ja-jp': "約２０年前の 科学力で 生み出された ポケモンなので 今や 時代遅れな 部分も 多い。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "クイックドロー" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札を1枚引く。",
			},
		},
		{
			name: { ja: "ぶつかる" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557431,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [137],
};

export default card;
