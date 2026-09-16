import { Card } from "../../../interfaces";
import Set from "../MF";

const card: Card = {
	set: Set,
	name: {
		ja: "キュウコン",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "黄金に 輝く 体毛と ９本の 長い 尻尾を 持つ。 １０００年は 生きると 言われる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ほのおのしっぽ" },
			damage: 60,
			cost: ["Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908367,
			},
		},
	],

	evolveFrom: {
		ja: "ロコン",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [38],
};

export default card;
