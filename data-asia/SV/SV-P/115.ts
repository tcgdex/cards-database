import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "キョジオーンex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 340,
	types: ["Fighting"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ソルティボディ" },
			effect: {
				ja: "このポケモンは特殊状態にならない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ブロックハンマー" },
			damage: 170,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-60」される。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 740416,
				tcgplayer: 587865,
			},
		},
	],

	evolveFrom: {
		ja: "ジオヅム",
	},

	retreat: 4,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [934],

	suffix: "EX",
};

export default card;
