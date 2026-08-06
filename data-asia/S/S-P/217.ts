import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤジロン",
		'zh-tw': "未知圖騰V",
	},

	illustrator: "Nagomi Nijo",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "古代 遺跡で 発見された。 回転 しながら 移動。 夜 眠る ときも 一本足だ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ひらてうち",
				'zh-tw': "奇異刻印",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 574585,
				tcgplayer: 597401,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [343],
};

export default card;
