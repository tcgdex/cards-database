import { Card } from "models/database/card";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "キテルグマ",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'ja-jp': "圧倒的な 筋力を 持つ 非常に 危険な ポケモン。 生息地は 基本 立ち入り禁止。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "もふもふ" },
			effect: {
				'ja-jp': "このポケモンが、相手のポケモン（[炎]ポケモンをのぞく）から受けるワザのダメージは「-30」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ふりおろす" },
			damage: "60+",
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンが進化ポケモンなら、60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560273,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヌイコグマ",
	},

	retreat: 3,
	rarity: "Rare",
	dexId: [760],
};

export default card;
