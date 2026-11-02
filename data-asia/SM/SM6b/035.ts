import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨーギラス",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "地底 奥深くで 生まれる。 まわりの 土を たいらげると 地上に 現われ サナギになる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "にらみつける" },
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "いわおとし" },
			damage: 20,
			cost: ["Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559185,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [246],
};

export default card;
