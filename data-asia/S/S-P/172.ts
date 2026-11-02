import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ヤドン",
		'zh-tw': "拉苯博士",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "ガラル地方にだけ 生息する 植物の タネを 食べているため しっぽは スパイシーな 味わいだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みんなでねそべる" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のポケモン全員のHPを、それぞれ「10」回復する。",
			},
		},
		{
			name: { ja: "しっぽではたく" },
			damage: 30,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561781,
				tcgplayer: 597370,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [79],
};

export default card;
