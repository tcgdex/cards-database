import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ツタージャ",
	},

	illustrator: "Susumu Maeya",
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
	resistances: [],

	variants: [
		{ type: "normal" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [495],

	thirdParty: {
		cardmarket: 828418,
		tcgplayer: 636355,
	},
};

export default card;
