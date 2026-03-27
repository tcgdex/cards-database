import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "イノムー",
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "ウリムー",
	},

	attacks: [
		{
			name: { ja: "ライジングランジ" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: { ja: "" },
		},
		{
			name: { ja: "フロストスマッシュ" },
			damage: 70,
			cost: ["Water", "Colorless", "Colorless"],
		}
	],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [221],
};

export default card;
