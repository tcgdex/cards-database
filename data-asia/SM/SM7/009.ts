import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "アメタマ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "危険が 及ぶと 頭の 先から 甘い味の 液体が にじみだす。 とりポケモンが 嫌いな味だ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あわ" },
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558970,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [283],
};

export default card;
