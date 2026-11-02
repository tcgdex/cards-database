import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "タマザラシ",
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "まだ 上手に 泳げず 転がったほうが 速く 動ける。 うれしいと みんなで 手をたたく。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "のしかかり" },
			damage: 30,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554803,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [363],
};

export default card;
