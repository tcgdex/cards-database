import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ブラッキーVMAX",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 310,
	types: ["Darkness"],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ダークシグナル" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ダイアーク" },
			damage: 160,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587043,
				tcgplayer: 571497,
			},
		},
	],

	evolveFrom: {
		ja: "ブラッキーV",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Character Super Rare",
	dexId: [197],
};

export default card;
