import { Card } from "../../../interfaces";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		ja: "アシマリ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "頑張り屋な 性質で 有名。 体液を 鼻で 膨らませた バルーンを 敵に ぶつける。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はたく" },
			damage: 10,
			cost: ["Water"],
		},
		{
			name: { ja: "みずでっぽう" },
			damage: 20,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561542,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [728],
};

export default card;
