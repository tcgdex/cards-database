import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ツタージャ",
	},

	illustrator: "Yoshimi Miyoshi",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "知能が 高く とても 冷静。 太陽の 光を たっぷり 浴びると 動きが 鋭くなる。",
	},

	stage: "Basic",

	attacks: [
		{ name: { ja: "たいあたり" }, damage: 10, cost: ["Grass"] },
		{ name: { ja: "つるのムチ" }, damage: 30, cost: ["Grass", "Grass"] },
	],

	weaknesses: [{ type: "Fire", value: "x2" }],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [495],
};

export default card;
