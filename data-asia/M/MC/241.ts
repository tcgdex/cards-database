import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒビキのピチュー",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 30,
	types: ["Lightning"],

	description: {
		ja: "電気を 溜めこむのが 下手。 なんらかの ショックを 受けると すぐに 放電 してしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ビリリドロー" },
			damage: 30,
			cost: [],
			effect: {
				ja: "自分の山札を1枚引く。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863537,
			},
		},
	],

	retreat: 0,
	regulationMark: "I",
	rarity: "None",
	dexId: [172],
};

export default card;
