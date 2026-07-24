import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "ナマケロ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "１日に 葉っぱを ３枚も 食べれば 満足で それ以外は ２０時間も 眠っている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かぎづめ" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
		{
			name: { ja: "なまける" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンのHPを、すべて回復する。次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559199,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [287],
};

export default card;
