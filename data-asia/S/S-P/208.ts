import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ",
		'zh-tw': "瑪俐",
	},

	illustrator: "YU NAGABA",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "おたがいの しっぽを くっつけて 電気を 流しあうのが ピカチュウ 同士の 挨拶だ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いっぱつしょうぶ" },
			damage: 70,
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 568802,
				tcgplayer: 597392,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [25],
};

export default card;
