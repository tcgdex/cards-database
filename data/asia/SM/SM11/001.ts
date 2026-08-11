import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤンヤンマ",
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "顔を 動かさずに ３６０度 すべてを 見渡す 目を 持つので 真後ろの 獲物も 見逃さない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "カッターウインド" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556960,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [193],
};

export default card;
