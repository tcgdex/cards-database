import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ハハコモリ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "幼い ポケモンを みつけると 口から 出す 粘着糸で 葉っぱの 服を 縫ってあげる。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "おくるみテーラー" },
			effect: {
				ja: "このポケモンがいるかぎり、自分の[草]ポケモン全員が、相手のポケモンから受けるワザのダメージは「-40」される。この効果は、この特性を持つポケモンが何匹いても、重ならない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "はっぱカッター" },
			damage: 70,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556967,
			},
		},
	],

	evolveFrom: {
		ja: "クルマユ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [542],
};

export default card;
