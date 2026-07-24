import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "グレッグル",
	},

	illustrator: "Aliya Chen",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "正々堂々と 戦うことは 少ないが それも 生き延びるため。 マスコットとして 人気が 高い。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なぐる" },
			damage: 10,
			cost: ["Fighting"],
		},
		{
			name: { ja: "かえるとび" },
			damage: "20+",
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863683,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [453],
};

export default card;
