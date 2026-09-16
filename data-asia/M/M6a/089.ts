import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャラコ",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		ja: "ウロコを 叩く 音で 仲間と コミュニケーションを とる。 群れで いると とても うるさい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いやなおと" },
			cost: ["Colorless"],
			effect: {
				ja: "次の自分の番、このワザを受けたポケモンが受けるワザのダメージは「+30」される。",
			},
		},
		{
			name: { ja: "ドラゴンクロー" },
			damage: 40,
			cost: ["Lightning", "Fighting"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908267,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [782],
};

export default card;
