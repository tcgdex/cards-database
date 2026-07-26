import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "モモワロウex",
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 190,
	types: ["Darkness"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "しはいのくさり" },
			effect: {
				ja: "自分の番に1回使える。自分のベンチの[D]ポケモン（「モモワロウex」をのぞく）を1匹選び、バトルポケモンと入れ替える。その後、新しいバトルポケモンをどくにする。この番、すでに別の「しはいのくさり」を使っていたなら、この特性は使えない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "イライラバースト" },
			damage: "60×",
			cost: ["Darkness", "Darkness"],
			effect: {
				ja: "相手がすでにとったサイドの枚数×60ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773839,
				tcgplayer: 566341,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Special illustration rare",
	dexId: [1025],

	suffix: "EX",
};

export default card;
