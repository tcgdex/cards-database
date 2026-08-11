import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ダルマッカ",
	},

	illustrator: "svlt",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'ja-jp': "体内で 炎が 燃えていると 落ち着かなく 走り回っている。 炎が 小さくなると 眠る。",
	},

	stage: "Basic",

	attacks: [
		{ name: { ja: "おにび" }, damage: 30, cost: ["Fire", "Colorless"] },
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{ type: "normal" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [554],

	thirdParty: {
		cardmarket: 828459,
		tcgplayer: 636367,
	},
};

export default card;
