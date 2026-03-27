import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "キュウコン",
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "ロコン",
	},

	attacks: [{"name": {"ja": "Suspicious Shapeshifting"}, "cost": ["Colorless"], "effect": {"ja": "Discard the top card of your deck. If that card is a Supporter, use its effect as the effect of this attack."}}, {"name": {"ja": "Blaze"}, "damage": 60, "cost": ["Fire", "Colorless"]}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [38],
};

export default card;
