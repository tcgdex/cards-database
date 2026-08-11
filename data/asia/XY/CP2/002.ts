import { Card } from "../../../interfaces";
import Set from "../CP2";

const card: Card = {
	set: Set,
	name: {
		ja: "レシラム",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きりさく" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "かえんれんだん" },
			damage: "90+",
			cost: ["Fire", "Fire", "Colorless", "Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数x20ダメージを追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 563483,
				tcgplayer: 605350,
			},
		},
	],

	retreat: 2,
	rarity: "Rare",
	dexId: [643],
};

export default card;
