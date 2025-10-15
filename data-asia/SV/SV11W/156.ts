import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "ワシボン",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "脚力で 木の実を 砕く。 どんなに 強い 相手でも 勇敢に 立ち向かう 習性。",
	},

	stage: "Basic",

	attacks: [
		{ name: { ja: "つつく" }, damage: 10, cost: ["Colorless"] },
		{
			name: { ja: "かっくう" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],

	resistances: [{ type: "Fighting", value: "-30" }],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [627],
};

export default card;
