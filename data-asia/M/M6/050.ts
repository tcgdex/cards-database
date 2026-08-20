import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャラコ",
	},

	illustrator: "June",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		ja: "ウロコを 叩く 音で 仲間と コミュニケーションを とる。 群れで いると とても うるさい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かたいあたま" },
			damage: 30,
			cost: ["Lightning", "Fighting"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899953,
				tcgplayer: 709203,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [782],
};

export default card;
