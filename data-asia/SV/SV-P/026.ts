import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ハカドッグ",
		'zh-tw': "潤水鴨",
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "普段は 墓場で 眠っている。 数いる 犬ポケモンの中でも もっとも 主に 忠実だ。",
		'zh-tw': "很久以前從遠方來到了這裡棲息。羽毛分泌出的凝膠有防水和防污的效果。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ほりだす",
				'zh-tw': "拍擊",
			},
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のトラッシュからグッズを2枚まで選び、相手に見せて、手札に加える。",
			},
		},
		{
			name: {
				ja: "ホロウショット",
				'zh-tw': "踢",
			},
			damage: 100,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693187,
				tcgplayer: 587783,
			},
		},
	],

	evolveFrom: {
		ja: "ボチ",
	},

	retreat: 3,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [972],
};

export default card;
