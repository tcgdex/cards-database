import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "チルット",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "真綿の ような 翼の 手入れは 絶対に 欠かさない。 汚れると 水浴びをして きれいに 洗う。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "うたう" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559038,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [333],
};

export default card;
