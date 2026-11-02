import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "アオキのノココッチex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Colorless"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "おしごとラッシュ" },
			damage: "80×",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーの数ぶんコインを投げ、オモテの数×80ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863879,
			},
		},
	],

	evolveFrom: {
		ja: "アオキのノコッチ",
	},

	retreat: 3,
	regulationMark: "J",
	rarity: "None",
	dexId: [982],

	suffix: "EX",
};

export default card;
