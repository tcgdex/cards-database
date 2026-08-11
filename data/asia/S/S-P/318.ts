import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒスイ ウォーグル",
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'ja-jp': "鬼気迫る 鬨の声を 上げ 狩りをする 猛き 大鳥。 湖水に 衝撃波を 放ち 水面に 浮かびし 獲物を 捕る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "せんりつのおたけび" },
			damage: 40,
			cost: [],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "デュアルカッター" },
			damage: "70×",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを2回投げ、オモテの数×70ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 681215,
				tcgplayer: 597491,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ワシボン",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [628],
};

export default card;
