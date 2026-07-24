import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "イーブイex",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "にじいろDNA" },
			effect: {
				ja: "このポケモンは、「イーブイ」から進化する「ポケモンex」を手札から出して、このポケモンにのせて進化できる。（最初の自分の番や、出したばかりの番には進化できない。）",
			},
		},
	],

	attacks: [
		{
			name: { ja: "クォーツシャイン" },
			damage: 200,
			cost: ["Fire", "Water", "Lightning"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863868,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [133],

	suffix: "EX",
};

export default card;
