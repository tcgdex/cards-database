import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "クロバットV",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 180,
	types: ["Darkness"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ナイトアセット" },
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の手札が6枚になるように、山札を引く。この番、すでに別の「ナイトアセット」を使っていたなら、この特性は使えない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "どくのキバ" },
			damage: 70,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 804752,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [169],
};

export default card;
