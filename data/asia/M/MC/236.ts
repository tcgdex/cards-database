import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "エレブー",
	},

	illustrator: "Amelicart",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "全身から つねに 電気が 放たれているため 近づくと 髪の毛が 逆立ってしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "エレキスラッグ" },
			damage: 50,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863532,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [125],
};

export default card;
