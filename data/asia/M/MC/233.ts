import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ビリリダマex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 170,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひゃくれつボール" },
			damage: "100+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数×100ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863529,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [100],

	suffix: "EX",
};

export default card;
