import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "チルタリスGX",
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
				ja: "次の相手の番、このポケモンは「ポケモンGX・EX」からワザのダメージを受けない。",
			},
		},
		{
			name: { ja: "ソニックエッジ" },
			damage: 110,
			cost: ["Water", "Fairy", "Colorless"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
		{
			name: { ja: "ユーフォリアGX" },
			cost: ["Fairy", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。自分のポケモン全員のHPを、すべて回復する。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559061,
			},
		},
	],

	evolveFrom: {
		ja: "チルット",
	},

	retreat: 1,
	rarity: "Ultra Rare",
	dexId: [334],

	suffix: "GX",
};

export default card;
