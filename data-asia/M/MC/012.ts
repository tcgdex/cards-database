import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "モンジャラ",
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "ちぎれても 無限に 伸びる ツルの 奥の 正体は いまだ 解明されていない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひっぱたく" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "つるでうつ" },
			damage: 30,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863299,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [114],
};

export default card;
