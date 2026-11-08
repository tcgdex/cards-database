import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オノノクス",
	},

	illustrator: "Tsuyoshi Nagano",
	category: "Pokemon",
	hp: 170,
	types: ["Dragon"],

	description: {
		'ja-jp': "自慢の キバで 敵を 圧倒。 鉄塔を 一刀のもとに 切り捨てる 切れ味を 誇る。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "アックスダウン" },
			cost: ["Fighting"],
			effect: {
				'ja-jp': "相手のバトルポケモンに特殊エネルギーがついているなら、そのポケモンをきぜつさせる。",
			},
		},
		{
			name: { ja: "りゅうのはどう" },
			damage: 230,
			cost: ["Fighting", "Metal"],
			effect: {
				'ja-jp': "自分の山札を上から3枚トラッシュする。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863845,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "オノンド",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [612],
};

export default card;
