import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "マンムーex",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 340,
	types: ["Fighting"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "マンモスキャリー" },
			effect: {
				ja: "自分の番に1回使える。自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "とどろくこうしん" },
			damage: "180+",
			cost: ["Fighting", "Fighting"],
			effect: {
				ja: "自分のベンチの2進化ポケモンの数×40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863666,
			},
		},
	],

	evolveFrom: {
		ja: "イノムー",
	},

	retreat: 4,
	regulationMark: "I",
	rarity: "None",
	dexId: [473],

	suffix: "EX",
};

export default card;
