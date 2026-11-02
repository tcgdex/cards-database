import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ワニノコ",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "発達した あごは パワフルで なんでも 噛み砕いて しまうので 親のトレーナーでも 要注意。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かみつく" },
			damage: 50,
			cost: ["Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 891804,
			},
		},
	],

	retreat: 2,
	rarity: "Promo",
	dexId: [158],
};

export default card;
