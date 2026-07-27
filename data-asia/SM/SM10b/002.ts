import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "イシズマイ",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "手ごろな 石に 穴を 開けて 住処にする。 壊されると かわりの 石が 見つかるまで 落ち着かない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ツメをたてる" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557193,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [557],
};

export default card;
