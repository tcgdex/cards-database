import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "モンジャラ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "動くものに ツルを 絡める。 ツルは 微妙に 揺れているので 絡みつかれると くすぐったい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひっぱたく" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "しめつける" },
			damage: 40,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558826,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [114],
};

export default card;
