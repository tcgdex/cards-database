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
		{
			name: {
				ja: "たいあたり",
			},
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],
	variants: [{ type: "normal" }],
	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [667],

	thirdParty: {
		cardmarket: 876913
	}
};

export default card;
