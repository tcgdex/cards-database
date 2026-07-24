import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "ケムッソ",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "森や 草むらに 生息。 敵に 襲われた ときは お尻の 毒の トゲで 対抗する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558891,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [265],
};

export default card;
