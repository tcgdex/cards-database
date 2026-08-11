import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨワシ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		ja: "とても 弱く とても 美味しいので 常に 誰からも 狙われているが いじめていると ひどい目に あうぞ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "げんちしゅうごう" },
			effect: {
				ja: "このポケモンがいるかぎり、自分の「ヨワシGX」全員は、最大HPが「20」大きくなり、使うワザの、相手のバトルポケモンへのダメージは「+20」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "みずでっぽう" },
			damage: 20,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543586,
			},
		},
	],

	retreat: 1,
	regulationMark: "B",
	rarity: "None",
	dexId: [746],
};

export default card;
