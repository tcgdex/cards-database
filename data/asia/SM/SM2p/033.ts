import { Card } from "models/database/card";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ルガルガン",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'ja-jp': "手強い 相手を 前に するほど 血が 高ぶる。 勝つためなら 我が身を かえりみず 襲いかかる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "デンジャラスクロー" },
			damage: "30+",
			cost: ["Fighting"],
			effect: {
				'ja-jp': "相手のバトルポケモンがたねポケモンなら、30ダメージ追加。",
			},
		},
		{
			name: { ja: "おいつめる" },
			damage: 90,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561266,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "イワンコ",
	},

	retreat: 2,
	rarity: "None",
	dexId: [745],
};

export default card;
