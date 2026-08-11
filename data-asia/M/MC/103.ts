import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒコザル",
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "お尻の 炎は お腹で 作られた ガスが 燃料。 雨に ぬれても 消えない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひをふく" },
			damage: "20+",
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863399,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [390],
};

export default card;
