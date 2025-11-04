import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "サザンドラex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "グリードイーター" },
			effect: {
				ja: "このポケモンが使うワザのダメージで、相手のたねポケモンがきぜつしたなら、サイドを1枚多くとる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ダークバイト" },
			damage: 200,
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],

	evolveFrom: {
		ja: "ジヘッド",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Ultra Rare",
	suffix: "EX",
};

export default card;
