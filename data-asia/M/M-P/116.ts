import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ハリマロン",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "普段 やわらかい 頭の トゲは 力を こめると 鋭く とがり 岩をも つらぬくほど 硬くなる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ミサイルばり" },
			damage: "10×",
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 891898,
			},
		},
	],

	retreat: 2,
	rarity: "Promo",
	dexId: [650],
};

export default card;
