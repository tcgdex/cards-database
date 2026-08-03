import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "サンダースVMAX",
		'zh-tw': "小海獅",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 300,
	types: ["Lightning"],

	stage: "VMAX",

	attacks: [
		{
			name: {
				ja: "ダイジンライ",
				'zh-tw': "頭錘",
			},
			damage: 100,
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "ダメカンがのっている相手のベンチポケモン1匹にも、100ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571391,
				tcgplayer: 597386,
			},
		},
	],

	evolveFrom: {
		ja: "サンダースV",
	},

	retreat: 0,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [135],
};

export default card;
