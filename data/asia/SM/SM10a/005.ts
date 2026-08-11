import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトモシ",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "明かりを 灯して 道案内を するように 見せかけながら 生命力を 吸い取っている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ともだちをさがす" },
			cost: ["Fire"],
			effect: {
				ja: "自分の山札にある[炎]ポケモンを1枚、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557282,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [607],
};

export default card;
