import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "ドンメル",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "灼熱の マグマを 背中の コブに ためている。 雨に 当たると マグマが 冷えて 動きが 鈍る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "れんぞくずつき" },
			damage: "30×",
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数x30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560319,
			},
		},
	],

	retreat: 3,
	rarity: "Common",
	dexId: [322],
};

export default card;
