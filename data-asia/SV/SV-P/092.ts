import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ピィ",
		'zh-tw': "寶可夢交替",
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],

	description: {
		ja: "お星さまのような シルエット。 その姿から 流れ星に乗って やって来ると 信じられている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "キラキラいのる" },
			cost: [],
			effect: {
				ja: "自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 723904,
				tcgplayer: 587850,
			},
		},
	],

	retreat: 0,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [173],
};

export default card;
