import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "オーベム",
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "オーベムが 現れた 牧場 からは いつの間にか バイウールーが １匹 姿を 消してしまう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "コスモビート" },
			damage: "20×",
			cost: ["Psychic"],
			effect: {
				ja: "自分の場のポケモンの数×20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863629,
			},
		},
	],

	evolveFrom: {
		ja: "リグレー",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [606],
};

export default card;
