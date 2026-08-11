import { Card } from "models/database/card";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ホワイトキュレムGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 190,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひきさく" },
			damage: 40,
			cost: ["Fire"],
			effect: {
				'ja-jp': "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
		{
			name: { ja: "いかりのやいば" },
			damage: "80+",
			cost: ["Fire", "Water", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにダメカンがのっているなら、80ダメージ追加。",
			},
		},
		{
			name: { ja: "ドラゴンノヴァGX" },
			damage: 200,
			cost: ["Fire", "Fire", "Water", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをやけどとマヒにする。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559308,
			},
		},
	],

	retreat: 3,
	rarity: "Double rare",
	dexId: [646],

	suffix: "GX",
};

export default card;
