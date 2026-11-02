import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ",
		'zh-tw': "平和公園",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "おたがいの しっぽを くっつけて 電気を 流しあうのが ピカチュウ 同士の 挨拶だ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いれかわる" },
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 573772,
				tcgplayer: 597410,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [25],
};

export default card;
