import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "サーフゴー",
	},

	illustrator: "Yukihiro Tada",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "コレクレー",
	},

	attacks: [{"name": {"ja": "All-You-Can-Grab"}, "cost": ["Colorless"]}, {"name": {"ja": "Speed Attack"}, "damage": 100, "cost": ["Metal", "Colorless", "Colorless"]}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [1000],
};

export default card;
