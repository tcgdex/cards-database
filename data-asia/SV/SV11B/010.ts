import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "タマゲタケ",
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "モンスターボールに 似た 模様で 誘い 毒胞子を 吹きかける。 なぜ 似ているかは ナゾである。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どくのほうし" },
			cost: ["Colorless"],
			effect: { ja: "相手のバトルポケモンをどくにする。" },
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{ type: "normal" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [590],

	thirdParty: {
		cardmarket: 828455,
		tcgplayer: 636364,
	},
};

export default card;
