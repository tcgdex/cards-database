import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ハカドッグex",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ホラーファング" },
			damage: "100+",
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数×20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863653,
			},
		},
	],

	evolveFrom: {
		ja: "ボチ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [972],

	suffix: "EX",
};

export default card;
