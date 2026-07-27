import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "ヌケニン",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],

	description: {
		ja: "ツチニンが 進化する ときに いつの間にか モンスターボールに 入っている 不思議な ポケモンだ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "いのちのうつわ" },
			effect: {
				ja: "自分の番に1回使える。このポケモンについているカードをすべてトラッシュし、このポケモンを「ポケモンのどうぐ」として、自分のポケモンにつける。このカードをつけているポケモンがきぜつしたとき、相手がとるサイドは1枚少なくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "のろう" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンに、ダメカンを3個のせる。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558840,
			},
		},
	],

	evolveFrom: {
		ja: "ツチニン",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [292],
};

export default card;
