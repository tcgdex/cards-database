import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤミカラス",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "光るものに 目が ない。 お宝を 求めて 宝石を ため込む ガバイトの 巣に 忍び込むことも。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おどろかす" },
			cost: ["Darkness"],
			effect: {
				ja: "相手の手札からオモテを見ないで1枚選び、そのカードのオモテを見てから、相手の山札にもどして切る。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557413,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [198],
};

export default card;
