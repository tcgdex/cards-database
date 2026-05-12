import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "シシコ",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "強くなるため 群れを 離れて １匹で 生活するようになる。 血気盛んで ケンカっ早い。",
	},

	stage: "Basic",
	attacks: [
		{ "name": { "ja": "たいあたり" }, "damage": "10", "cost": ["Colorless"], "effect": { "ja": "" } }
	],

	
	weaknesses: [{ "type": "Water", "value": "x2" }],
	
	resistances: [],
	
	retreat: 1,

	variants: [{"type": "normal"}],
	rarity: "Common",
	dexId: [667],
	regulationMark: "I",
};

export default card;
