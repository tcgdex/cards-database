import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "サルノリ",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "特別な スティックで リズムを 刻むと 草花を 元気にする パワーが 音波になって 広がる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "えだづき" },
			damage: 40,
			cost: ["Grass", "Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 891851,
			},
		},
	],

	retreat: 1,
	rarity: "Promo",
	dexId: [810],
};

export default card;
