import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ブーバー",
	},

	illustrator: "Hiroki Asanuma",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "全身が 燃えていて 息を するだけでも 熱い。 くしゃみと 同時に 炎が 噴きだすぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "えんばく" },
			damage: 10,
			cost: ["Fire"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557279,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [126],
};

export default card;
