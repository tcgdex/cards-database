import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドレディア",
	},

	illustrator: "mele",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'ja-jp': "美しい 花を 咲かせるのは ベテラントレーナーでも 難しい。 セレブに 人気の ポケモン。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "げんわくアロマ" },
			damage: 30,
			cost: ["Grass"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをどくとマヒにする。ウラなら、相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "いあいぎり" },
			damage: 70,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{ type: "normal" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	evolveFrom: {
		'ja-jp': "チュリネ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [549],

	thirdParty: {
		cardmarket: 828445,
		tcgplayer: 636361,
	},
};

export default card;
