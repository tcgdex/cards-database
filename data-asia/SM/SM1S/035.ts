import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "ワルビル",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		ja: "数匹の 群れを 成して 行動。 群れの 中心は ♀の 場合が 多く ♂たちが 餌を 集める。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "はたきおとす" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手の手札からオモテを見ないで、1枚トラッシュする。",
			},
		},
		{
			name: { ja: "やみのキバ" },
			damage: 60,
			cost: ["Darkness", "Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561712,
			},
		},
	],

	evolveFrom: {
		ja: "メグロコ",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [552],
};

export default card;
