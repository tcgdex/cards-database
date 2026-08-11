import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ケルディオGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ホーリーハート" },
			effect: {
				'ja-jp': "このポケモンは、相手の「ポケモンGX・EX」からワザのダメージや効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ソニックエッジ" },
			damage: 110,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				'ja-jp': "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
		{
			name: { ja: "かくごのつるぎGX" },
			damage: "50×",
			cost: ["Water", "Water", "Colorless"],
			effect: {
				'ja-jp': "相手のベンチポケモンの数×50ダメージ。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 543571,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Double rare",
	dexId: [647],

	suffix: "GX",
};

export default card;
