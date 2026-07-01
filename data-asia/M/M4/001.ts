import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,

	name: {
		ja: "ビードル",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "森や 草地に 多く 生息。 頭の 先に ５センチぐらいの 小さく 鋭い 毒針を持つ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ふいをつく",
			},
			damage: 30,
			cost: ["Grass"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],
	variants: [{ type: "normal" }],
	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [13],

	thirdParty: {
		cardmarket: 876898
	}
};

export default card;
