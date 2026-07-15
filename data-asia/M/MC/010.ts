import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "タマタマ",
	},

	illustrator: "Iori Suzuki",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "タマタマだけに 伝わる テレパシーを 出し合っているので どんなときでも ６匹 集まれる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 30,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863297,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [102],
};

export default card;
