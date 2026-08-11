import { Card } from "models/database/card";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エーフィ",
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'ja-jp': "額の 玉から サイコパワーを 放射して 戦う。 パワーが 尽きると 玉の 色が くすむ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひきつける" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札を3枚引く。",
			},
		},
		{
			name: { ja: "エナジークラッシュ" },
			damage: "20+",
			cost: ["Psychic"],
			effect: {
				'ja-jp': "相手の場のポケモンについているエネルギーの数x20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558679,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "イーブイ",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [196],
};

export default card;
