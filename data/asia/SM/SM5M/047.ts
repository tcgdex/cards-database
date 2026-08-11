import { Card } from "models/database/card";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ミミロル",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'ja-jp': "危険を 感じ取ると 両耳を 立てて 警戒する。 寒い 夜は 毛皮に 顔を 埋めて 眠る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ホネぬき" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。",
			},
		},
		{
			name: { ja: "スキップ" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559860,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [427],
};

export default card;
