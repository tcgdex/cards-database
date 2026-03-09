import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "ワシボン",
	},

	illustrator: "Kedamahadaitai Yawarakai",
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

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
			foil: "pokeball",
		},
		{
			type: "reverse",
			foil: "masterball",
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [627],
	thirdParty: {
		cardmarket: 829079,
		tcgplayer: 636629,
	},
};

export default card;
