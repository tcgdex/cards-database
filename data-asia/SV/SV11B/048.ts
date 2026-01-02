import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "モグリュー",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "地中を 掘り進む スピードは 時速５０キロ以上。 地上を 走る 自動車と いい勝負。",
	},

	stage: "Basic",

	attacks: [
		{ name: { ja: "どろかけ" }, damage: 10, cost: ["Fighting"] },
		{ name: { ja: "どつく" }, damage: 30, cost: ["Fighting", "Fighting"] },
	],

	weaknesses: [{ type: "Grass", value: "x2" }],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [529],
};

export default card;
