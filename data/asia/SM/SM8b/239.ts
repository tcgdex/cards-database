import { Card } from "models/database/card";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "チルタリスGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 200,
	types: ["Dragon"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ブライトトーン" },
			damage: 50,
			cost: ["Fairy", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このポケモンは「ポケモンGX・EX」からワザのダメージを受けない。",
			},
		},
		{
			name: { ja: "ソニックエッジ" },
			damage: 110,
			cost: ["Water", "Fairy", "Colorless"],
			effect: {
				'ja-jp': "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
		{
			name: { ja: "ユーフォリアGX" },
			cost: ["Fairy", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをねむりにする。自分のポケモン全員のHPを、すべて回復する。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551691,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "チルット",
	},

	retreat: 1,
	rarity: "Ultra Rare",
	dexId: [334],

	suffix: "GX",
};

export default card;
