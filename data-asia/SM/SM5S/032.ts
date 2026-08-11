import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラディグダ",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 50,
	types: ["Metal"],

	description: {
		ja: "金色の 髭は センサー機能を 持っている。 穴から だして 周りの 様子を うかがっている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "アイアンヘッド" },
			damage: "10×",
			cost: [],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数x10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559986,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [50],
};

export default card;
