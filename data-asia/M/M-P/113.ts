import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ツタージャ",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "知能が 高く とても 冷静。 太陽の 光を たっぷり 浴びると 動きが 鋭くなる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つるのムチ" },
			damage: 20,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 891819,
			},
		},
	],

	retreat: 1,
	rarity: "Promo",
	dexId: [495],
};

export default card;
