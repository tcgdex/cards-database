import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "リーフィアVSTAR",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Grass"],

	stage: "VSTAR",

	abilities: [
		{
			type: "Ability",
			name: { ja: "アイビースター" },
			effect: {
				'ja-jp': "自分の番に使える。相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。［対戦中、自分はVSTARパワーを1回しか使えない。］",
			},
		},
	],

	attacks: [
		{
			name: { ja: "リーフガード" },
			damage: 180,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 604993,
				tcgplayer: 597442,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "リーフィアV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [470],
};

export default card;
