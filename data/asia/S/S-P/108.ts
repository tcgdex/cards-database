import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ザルードV",
		'zh-tw': "打空保險",
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "しばりつける" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "ジャングルライズ" },
			damage: 100,
			cost: ["Grass", "Grass"],
			effect: {
				ja: "のぞむなら、自分の手札から基本エネルギーを2枚まで選び、ベンチポケモンに好きなようにつける。その後、つけたポケモンのHPをすべて回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 597309,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [893],
};

export default card;
