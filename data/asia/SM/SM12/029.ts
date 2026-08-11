import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "コロモリ",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "暗い 森や 洞穴で 暮らす。 鼻の 穴から 超音波を 出して あたりの 様子を 探る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はなですいつく" },
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "エアカッター" },
			damage: 30,
			cost: ["Psychic"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554833,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [527],
};

export default card;
