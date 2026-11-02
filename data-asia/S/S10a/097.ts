import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ ゾロアークVSTAR",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 270,
	types: ["Colorless"],

	stage: "VSTAR",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ファントムスター" },
			effect: {
				ja: "自分の番に使える。自分の手札をすべてトラッシュし、山札を7枚引く。［対戦中、自分はVSTARパワーを1回しか使えない。］",
			},
		},
	],

	attacks: [
		{
			name: { ja: "のろいをきざむ" },
			damage: "50×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の場のダメカンがのっているポケモンの数×50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 657076,
				tcgplayer: 570760,
			},
		},
	],

	evolveFrom: {
		ja: "ヒスイ ゾロアークV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Mega Hyper Rare",
	dexId: [571],
};

export default card;
