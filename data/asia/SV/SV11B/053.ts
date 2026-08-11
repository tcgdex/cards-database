import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ナゲキ",
	},

	illustrator: "Shin Nagasawa",
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

	variants: [
		{ type: "normal" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [538],

	thirdParty: {
		cardmarket: 828521,
		tcgplayer: 636407,
	},
};

export default card;
