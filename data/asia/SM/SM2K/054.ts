import { Card } from "models/database/card";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジャラランガGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 240,
	types: ["Dragon"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "こんごうプレス" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
		{
			name: { ja: "ひきさく" },
			damage: 130,
			cost: ["Lightning", "Fighting", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
		{
			name: { ja: "ゲキアッパーGX" },
			damage: 240,
			cost: ["Lightning", "Fighting", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561520,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ジャランゴ",
	},

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [784],

	suffix: "GX",
};

export default card;
