import { Card } from "models/database/card";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ボクレー",
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'ja-jp': "森で さまよい 死んだ 子供の 魂が 切り株に 宿り ポケモンになったと いわれている。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "うらみしんか" },
			effect: {
				'ja-jp': "自分の番に1回使える。このポケモンから進化するカードを、自分の手札から1枚選び、このポケモンにのせて進化させる。その後、進化させたポケモンに、ダメカンを2個のせる。（最初の自分の番には使えない。）",
			},
		},
	],

	attacks: [
		{
			name: { ja: "つぶやく" },
			damage: 10,
			cost: ["Psychic"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876937,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Common",
	dexId: [708],
};

export default card;
