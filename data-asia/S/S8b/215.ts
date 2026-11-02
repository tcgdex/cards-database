import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "イオルブVMAX",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かいこうせん" },
			effect: {
				ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。相手のポケモン全員に、それぞれダメカンを1個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "キョダイウェーブ" },
			damage: "50+",
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587013,
				tcgplayer: 571467,
			},
		},
	],

	evolveFrom: {
		ja: "イオルブV",
	},

	retreat: 1,
	regulationMark: "D",
	rarity: "Character Super Rare",
	dexId: [826],
};

export default card;
