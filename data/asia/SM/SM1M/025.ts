import { Card } from "models/database/card";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スリーパー",
	},

	illustrator: "OOYAMA",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'ja-jp': "出会った者を 取りあえず 眠らせ その夢を 味見。 いい夢を 見ていたら そのまま 連れ去る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ヨガのポーズ" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンにのっているダメカンの数x10ダメージ追加。",
			},
		},
		{
			name: { ja: "さいみんはどう" },
			damage: 70,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561626,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "スリープ",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [97],
};

export default card;
