import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウV",
		'zh-tw': "伊布",
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ピカボール",
				'zh-tw': "準備",
			},
			damage: 30,
			cost: ["Lightning"],
		},
		{
			name: {
				ja: "エレキサークル",
				'zh-tw': "咬住",
			},
			damage: "30×",
			cost: ["Lightning", "Lightning"],
			effect: {
				ja: "自分のベンチポケモンの数×30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525290,
				tcgplayer: 597322,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [25],
};

export default card;
