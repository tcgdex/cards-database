import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "テッシード",
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "危険を 察知すると トゲを いっせいに 発射して 反撃。 その すきに 転がって 逃げる。",
	},

	stage: "Basic",

	attacks: [
		{ name: { ja: "チクッ" }, damage: 10, cost: ["Metal"] },
		{
			name: { ja: "メタルクロー" },
			damage: 40,
			cost: ["Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],

	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [597],
	thirdParty: {
		cardmarket: 829503,
		tcgplayer: 636697,
	},
};

export default card;
