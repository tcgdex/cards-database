import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "コフキムシ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "体を 覆う 粉が 体温を 調節するので どんな 気候や 風土の 地域でも 暮らせる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちょうしんか" },
			cost: ["Grass"],
			effect: {
				ja: "コインを1回投げオモテなら、自分の山札にある「ビビヨン」を1枚、この「コフキムシ」にのせて進化させる。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559549,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [664],
};

export default card;
