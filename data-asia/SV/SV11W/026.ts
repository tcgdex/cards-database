import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "バイバニラ",
	},

	illustrator: "cochi8i",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		ja: "水を 大量に 飲み込んで 体内で 雪雲を 作る。 猛吹雪で 敵を 苦しめる。",
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
				ja: "コインを2回投げ、オモテの数×90ダメージ。1回でもオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
			foil: "pokeball",
		},
		{
			type: "reverse",
			foil: "masterball",
		},
	],

	evolveFrom: {
		ja: "バニリッチ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [584],
	thirdParty: {
		cardmarket: 829028,
		tcgplayer: 636579,
	},
};

export default card;
