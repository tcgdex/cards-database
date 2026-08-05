import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ガバイト",
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "光るものが 大好き。 メレシーを 狙う ヤミラミを 見つけると 激しく 怒って 襲いかかる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "どつく" },
			damage: 20,
			cost: ["Fighting"],
		},
		{
			name: { ja: "するどいカマ" },
			damage: 40,
			cost: ["Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557302,
			},
		},
	],

	evolveFrom: {
		ja: "フカマル",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [444],
};

export default card;
