import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ガオガエンex",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ハッスルプレー" },
			effect: {
				ja: "相手のベンチポケモンの数ぶん、このポケモンがワザを使うための[C]エネルギーは少なくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ブレイズボム" },
			damage: 240,
			cost: ["Fire", "Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863428,
			},
		},
	],

	evolveFrom: {
		ja: "ニャヒート",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [727],

	suffix: "EX",
};

export default card;
