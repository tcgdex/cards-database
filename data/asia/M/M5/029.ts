import { Card } from "models/database/card";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヤドラン",
	},

	illustrator: "CHORISO",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'ja-jp': "くっついている シェルダーは 尻尾から にじみでる うま味が 欲しくて ずっと 離れない。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "スッカラカン" },
			damage: "50+",
			cost: ["Psychic"],
			effect: {
				'ja-jp': "自分の手札が1枚もないなら、160ダメージ追加。",
			},
		},
		{
			name: { ja: "しねんのずつき" },
			damage: 110,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888272,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヤドン",
	},

	retreat: 3,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [80],
};

export default card;
