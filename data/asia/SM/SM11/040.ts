import { Card } from "models/database/card";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニダンギル",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'ja-jp': "進化して ２本に 分裂した。 テレパシーで 会話して 連係攻撃で 敵を 切り刻む。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "スラッシュカッター" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "このワザのダメージは弱点・抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557002,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヒトツキ",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Common",
	dexId: [680],
};

export default card;
