import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ガーディ",
		'zh-tw': "新葉喵",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'ja-jp': "人懐こく 誠実な 性格。 敵には ほえて かみつき 追い払おうとする。",
		'zh-tw': "毛茸茸的體毛有著近似於植物的成分。會勤快地洗臉以防止乾燥。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "もえあがる",
				'zh-tw': "抓",
			},
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札から「基本[R]エネルギー」を2枚まで選び、このポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: {
				'ja-jp': "ほのおのツメ",
				'zh-tw': "樹葉",
			},
			damage: 70,
			cost: ["Fire", "Fire", "Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693185,
				tcgplayer: 587781,
			},
		},
	],

	retreat: 3,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [58],
};

export default card;
