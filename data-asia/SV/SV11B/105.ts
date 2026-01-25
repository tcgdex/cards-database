import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒヤップ",
	},

	illustrator: "Hoshino KURO",
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

	variants: [{ type: "holo" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [515],

	thirdParty: {
		cardmarket: 829348,
		tcgplayer: 636459,
	},
};

export default card;
