import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "アブリボン",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 60,
	types: ["Fairy"],

	description: {
		ja: "アブリボンの 花粉団子は 栄養満点の ものも ある。 サプリメントとして 売られることも。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ふしぎなはおと" },
			effect: {
				ja: "このポケモンがベンチにいるかぎり、自分の場の[妖]ポケモン全員は、相手が手札からサポートを出して使ったとき、その効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ふむ" },
			damage: 20,
			cost: ["Fairy"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558860,
			},
		},
	],

	evolveFrom: {
		ja: "アブリー",
	},

	retreat: 0,
	rarity: "Uncommon",
	dexId: [743],
};

export default card;
