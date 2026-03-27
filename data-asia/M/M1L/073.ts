import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ハガネール",
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	hp: 200,
	types: ["Metal"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "イワーク",
	},

	attacks: [{"name": {"ja": "ウェルカムテール"}, "damage": "40+", "cost": ["Colorless", "Colorless"], "effect": {"ja": "If you have exactly 6 prize cards remaining, this attack does 200 more damage."}}, {"name": {"ja": "ロケットずつき"}, "damage": 140, "cost": ["Metal", "Metal", "Colorless", "Colorless"]}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "holo"}],

	retreat: 4,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [208],
};

export default card;
