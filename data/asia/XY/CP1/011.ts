import { Card } from "models/database/card";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マグマ団のネンドール",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'ja-jp': "ネンドールが 放つ ビームは 確実に 敵を 捉えるの。 遠くからの 攻撃は 任せなさい！",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "マグマスイッチ" },
			effect: {
				'ja-jp': "自分の場のポケモンについている基本エネルギーを1個選び、自分の別の「マグマ団」のポケモンにつけ替える。この特性は、自分の番に1回使える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "パワービーム" },
			damage: 70,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 563731,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "マグマ団のヤジロン",
	},

	retreat: 2,
	rarity: "Rare",
	dexId: [344],
};

export default card;
