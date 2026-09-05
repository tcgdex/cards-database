import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒコザル",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "断崖絶壁を 身軽に 登り 岩山の 上で 生活する。 炎を 消して 眠る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みだれひっかき" },
			damage: "20×",
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 891810,
			},
		},
	],

	retreat: 1,
	rarity: "Promo",
	dexId: [390],
};

export default card;
