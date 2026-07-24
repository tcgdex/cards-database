import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "ココドラ",
	},

	illustrator: "TOKIYA",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "普段は 山奥で 暮らしているが お腹が すくと ふもとに 現われ 線路や 車を 食べてしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 10,
			cost: ["Metal"],
		},
		{
			name: { ja: "メタルクロー" },
			damage: 30,
			cost: ["Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560344,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [304],
};

export default card;
