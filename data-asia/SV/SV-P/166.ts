import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "メタモン",
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "変身は 完璧なのだが 笑わされて 力が 抜けると 変身は 解けてしまう。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "へんしんスタート" },
			effect: {
				ja: "このポケモンがバトル場にいるなら、最初の自分の番にだけ1回使える。自分の山札からたねポケモン（「メタモン」をのぞく）を1枚選ぶ。その後、このポケモンと、ついているすべてのカードをトラッシュし、このポケモンがいた場所に、選んだポケモンを出す。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ぺとっ" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 587909,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [132],
};

export default card;
