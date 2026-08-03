import { Card } from "../../../interfaces";
import Set from "../CP2";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウEX",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "アイアンテール" },
			damage: "30×",
			cost: ["Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数x30ダメージ。",
			},
		},
		{
			name: { ja: "オーバースパーク" },
			damage: "50×",
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[雷]エネルギーをすべてトラッシュし、トラッシュした枚数x50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 563489,
				tcgplayer: 605348,
			},
		},
	],

	retreat: 1,
	rarity: "Double rare",
	dexId: [25],

	suffix: "EX",
};

export default card;
