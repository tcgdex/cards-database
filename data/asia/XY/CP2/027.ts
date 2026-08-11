import { Card } from "../../../interfaces";
import Set from "../CP2";

const card: Card = {
	set: Set,
	name: {
		ja: "オンバット",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "２０万ヘルツの 超音波を 浴びると 屈強な レスラーも 目が 回り 立っていられないのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちょっとすいとる" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンのHPを「10」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563508,
				tcgplayer: 605345,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [714],
};

export default card;
