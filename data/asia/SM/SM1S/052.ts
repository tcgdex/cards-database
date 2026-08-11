import { Card } from "models/database/card";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "キテルグマ",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'ja-jp': "圧倒的な 筋力を 持つ 非常に 危険な ポケモン。 生息地は 基本 立ち入り禁止。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ベアハッグ" },
			damage: 40,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "ばかぢから" },
			damage: "80+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "のぞむなら、40ダメージ追加。その場合、このポケモンにも20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561729,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヌイコグマ",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [760],
};

export default card;
