import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ラティアス",
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		ja: "テレパシーで 気持ちを 通わせる。 光を 屈折させる 羽毛で 体を 包み 姿を 消す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "エナジーアロー" },
			damage: "20×",
			cost: ["Psychic"],
			effect: {
				ja: "相手のポケモン1匹に、そのポケモンについているエネルギーの数×20ダメージ。このワザのダメージは弱点・抵抗力を計算しない。",
			},
		},
		{
			name: { ja: "スピードウイング" },
			damage: 100,
			cost: ["Fire", "Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557312,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [380],
};

export default card;
