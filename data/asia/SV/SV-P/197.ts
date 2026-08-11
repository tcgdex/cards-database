import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ",
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "両頬には 電気を 溜めこむ 袋がある。 怒ると 溜めこんだ 電気を 一気に 放ってくる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "げきとうスパーク" },
			damage: "30+",
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数×30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 783439,
				tcgplayer: 587919,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [25],
};

export default card;
