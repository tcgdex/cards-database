import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ダルマッカ",
	},

	illustrator: "Tomowaka",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "体内で 炎が 燃えていると 落ち着かなく 走り回っている。 炎が 小さくなると 眠る。",
	},

	stage: "Basic",

	attacks: [
		{ name: { ja: "おにび" }, damage: 30, cost: ["Fire", "Colorless"] },
	],

	weaknesses: [{ type: "Water", value: "x2" }],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [554],
};

export default card;
