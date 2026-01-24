import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "テッシード",
	},

	illustrator: "Hasuno",
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

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [597],
	thirdParty: {
		cardmarket: 829066,
		tcgplayer: 636616,
	},
};

export default card;
