import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ナマケロ",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "ナマケロの 怠けた 様子は 見ている 人の 怠け心を 存分に 刺激するのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なまけごえ" },
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンに、相手が手札からエネルギーをつけたなら、相手の番は終わる。",
			},
		},
		{
			name: { ja: "ぶらさがる" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557035,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [287],
};

export default card;
