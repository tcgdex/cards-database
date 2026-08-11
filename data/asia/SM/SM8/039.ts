import { Card } from "models/database/card";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ネイティオ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		'ja-jp': "ほとんど 動かず 鳴きもせず じっとするのは 過去と 未来を 見ているからだと 信じられている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "エナジーゲイズ" },
			damage: "30+",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手の手札を見て、その中にエネルギーがあるなら、60ダメージ追加。",
			},
		},
		{
			name: { ja: "ねんどうだん" },
			damage: 80,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558678,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ネイティ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [178],
};

export default card;
