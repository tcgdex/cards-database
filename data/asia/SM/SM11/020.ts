import { Card } from "models/database/card";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "コソクムシ",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'ja-jp': "落ちているものは 何でも 拾う。 コインを 持っていることも あるので ヤミカラスやニャースに 狙われる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "すなかけ" },
			damage: 10,
			cost: ["Water"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556979,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [767],
};

export default card;
