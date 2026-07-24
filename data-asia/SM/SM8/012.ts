import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "クヌギダマ",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "木の実に そっくり。 間違われて とりポケモンに つつかれてしまうが 硬い 殻で 守られている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "れんぞくずつき" },
			damage: "20×",
			cost: ["Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数x20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558651,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [204],
};

export default card;
