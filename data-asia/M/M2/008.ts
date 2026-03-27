import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲノセクト",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "むしのほう" },
			cost: ["Grass"],
			effect: { ja: "" },
		},
		{
			name: { ja: "スピードアタック" },
			damage: 110,
			cost: ["Grass", "Grass", "Colorless"],
		}
	],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare Holo",
	dexId: [649],
};

export default card;
