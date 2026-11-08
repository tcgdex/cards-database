import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジャノビー",
	},

	illustrator: "Susumu Maeya",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'ja-jp': "地面を 滑るように 走る。 素早い 動きで 敵を まどわせ つるのムチで しとめるのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "まきつく" },
			damage: 20,
			cost: ["Grass"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "つるのムチ" },
			damage: 60,
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
		'ja-jp': "ツタージャ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [496],

	thirdParty: {
		cardmarket: 828424,
		tcgplayer: 636356,
	},
};

export default card;
