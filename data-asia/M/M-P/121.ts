import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "アシマリ",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "頑張り屋な 性質で 有名。 体液を 鼻で 膨らませた バルーンを 敵に ぶつける。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "チャームボイス" },
			damage: 20,
			cost: ["Water", "Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 891850,
			},
		},
	],

	retreat: 1,
	rarity: "Promo",
	dexId: [728],
};

export default card;
