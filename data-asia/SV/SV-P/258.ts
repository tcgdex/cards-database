import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ガチグマ アカツキex",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 260,
	types: ["Colorless"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ろうれんのわざ" },
			effect: {
				ja: "相手がすでにとったサイドの枚数ぶん、このポケモンが「ブラッドムーン」を使うための[C]エネルギーは少なくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ブラッドムーン" },
			damage: 240,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 813949,
				tcgplayer: 676108,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [901],

	suffix: "EX",
};

export default card;
