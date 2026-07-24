import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラニャース",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "元々 アローラには いなかったが 人の 手で 増えたのち 野生化。 ズル賢くて プライドが 高い。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みだれひっかき" },
			damage: "10×",
			cost: [],
			effect: {
				ja: "コインを3回投げ、オモテの数x10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561709,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [52],
};

export default card;
