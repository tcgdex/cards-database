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

	variants: [
		{
			type: "normal",
		},
	],

	evolveFrom: {
		ja: "ジヘッド",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Double rare",
	suffix: "EX",
	dexId: [635],
	thirdParty: {
		cardmarket: 829065,
		tcgplayer: 636615,
	},
};

export default card;
