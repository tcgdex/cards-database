import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "エースバーンV",
		'zh-tw': "波克基古",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ほのお",
				'zh-tw': "妖精之風",
			},
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "ぜんりょくシュート" },
			damage: 210,
			cost: ["Fire", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 534107,
				tcgplayer: 597366,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [815],
};

export default card;
