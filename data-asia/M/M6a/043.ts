import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ",
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		ja: "ほっぺたの 両側に 小さい 電気袋を 持つ。 ピンチのときに 放電する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とうしのいかずち" },
			damage: "20+",
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが「ポケモンex」なら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908221,
			},
		},
	],

	retreat: 3,
	regulationMark: "J",
	rarity: "None",
	dexId: [25],
};

export default card;
