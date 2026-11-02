import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "コダック",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "自分の 意思とは 関係なく 時折 念力が でてきて 頭が 痛くて 鳴いている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "へんなねんぱ" },
			cost: ["Colorless"],
			effect: {
				ja: "おたがいのバトルポケモンを、それぞれこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561688,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [54],
};

export default card;
