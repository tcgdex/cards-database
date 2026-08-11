import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "コリンク",
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "筋肉が 伸び縮み することで 電気が 発生。 ピンチになると 体毛が まぶしく 光る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こうきしん" },
			cost: ["Colorless"],
			effect: {
				ja: "相手の手札を見る。",
			},
		},
		{
			name: { ja: "バチバチ" },
			damage: 30,
			cost: ["Lightning", "Lightning"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863540,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [403],
};

export default card;
