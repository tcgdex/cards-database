import { Card } from "models/database/card";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "バイバニラ",
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		'ja-jp': "水を 大量に 飲み込んで 体内で 雪雲を 作る。 猛吹雪で 敵を 苦しめる。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 60,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "ダブルフリーズ" },
			damage: "90x",
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを2回投げ、オモテの数×90ダメージ。1回でもオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	evolveFrom: {
		'ja-jp': "バニリッチ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [584],
	thirdParty: {
		cardmarket: 829466,
		tcgplayer: 636663,
	},
};

export default card;
