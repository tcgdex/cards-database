import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ナゲキ",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'ja-jp': "帯を 締めると パワーアップする。 野生の ナゲキは つる草を 編んで 自分の 帯を 作る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "せおいなげ" },
			damage: "120-",
			cost: ["Fighting", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンのにげるためのエネルギーの数×30ダメージぶん、このワザのダメージは小さくなる。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [538],

	thirdParty: {
		cardmarket: 829380,
		tcgplayer: 636488,
	},
};

export default card;
