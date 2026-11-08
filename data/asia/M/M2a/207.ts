import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "チャーレム",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'ja-jp': "ヨガの 修行で 鍛えられた サイコパワーで 相手の 動きを 予測することが できるのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "セブンスキック" },
			damage: 150,
			cost: ["Fighting"],
			effect: {
				'ja-jp': "自分の手札が7枚でないなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 861450,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "アサナン",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [308],
};

export default card;
