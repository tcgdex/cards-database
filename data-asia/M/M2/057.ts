import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ストリンダー",
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "エレズン",
	},

	attacks: [
		{
			name: { ja: "ポカリ" },
			damage: 100,
			cost: ["Darkness", "Darkness", "Colorless"],
		}
	],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare Holo",
	dexId: [849],
};

export default card;
