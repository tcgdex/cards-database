import { Card } from "../../../interfaces";
import Set from "../MF";

const card: Card = {
	set: Set,
	name: {
		ja: "エーフィex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "サンシャインビート" },
			damage: "30×",
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "自分の場のポケモンの数×30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908376,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [196],

	suffix: "EX",
};

export default card;
