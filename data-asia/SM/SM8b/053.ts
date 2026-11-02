import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "カラカラ",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "頭に 被った 頭がい骨は 死んだ 母親。 死の 悲しみを 乗り越えたとき 進化する という。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おもいホネ" },
			damage: 40,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550751,
			},
		},
	],

	retreat: 2,
	rarity: "None",
	dexId: [104],
};

export default card;
