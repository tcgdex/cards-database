import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,

	name: {
		ja: "コソクムシ",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "腐ったものや ゴミでも なんでも 食べまわる 自然の 掃除屋。 巣の まわりは いつも きれい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "かじる",
			},
			damage: 10,
			cost: ["Water"],
		},
		{
			name: {
				ja: "どつく",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],
	variants: [{ type: "normal" }],
	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [767],

	thirdParty: {
		cardmarket: 876924
	}
};

export default card;
