import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ガメノデス",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "手足にも 脳が あり 勝手に 動けるが 普段は 頭の ガメノデスの 命令に 従う。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "セブンショック" },
			damage: 30,
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "自分の手札が7枚なら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "ツメできりさく" },
			damage: 90,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559589,
			},
		},
	],

	evolveFrom: {
		ja: "カメテテ",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [689],
};

export default card;
