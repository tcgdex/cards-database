import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒヤップ",
	},

	illustrator: "Makura Tami",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "頭の ふさに ためた 水は 栄養 たっぷり。 植物に かけると 大きく 育つのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "もってくる" },
			cost: ["Colorless"],
			effect: { ja: "自分の山札を1枚引く。" },
		},
		{
			name: { ja: "ひっかく" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{ type: "normal" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [515],

	thirdParty: {
		cardmarket: 828468,
		tcgplayer: 636374,
	},
};

export default card;
