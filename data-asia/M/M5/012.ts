import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "トサキント",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "背びれ 胸びれ 尾びれが 優雅に たなびくので 水の踊り子 と呼ばれる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つきさす" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [{ type: "normal" }],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [118],

	thirdParty: {
		cardmarket: 888249,
	},
};

export default card;
