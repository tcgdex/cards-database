import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "タマザラシ",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "まだ 上手に 泳げず 転がったほうが 速く 動ける。 うれしいと みんなで 手をたたく。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ころがる" },
			damage: 10,
			cost: ["Water"],
		},
		{
			name: { ja: "スノーアイス" },
			damage: 20,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554799,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [363],
};

export default card;
