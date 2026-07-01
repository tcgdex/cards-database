import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,

	name: {
		ja: "ボクレー",
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "森で さまよい 死んだ 子供の 魂が 切り株に 宿り ポケモンになったと いわれている。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "うらみしんか",
			},
			effect: {
				ja: "自分の番に1回使える。このポケモンから進化するカードを、自分の手札から1枚選び、このポケモンにのせて進化させる。その後、進化させたポケモンに、ダメカンを2個のせる。（最初の自分の番には使えない。）",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "つぶやく",
			},
			damage: 10,
			cost: ["Psychic"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	variants: [{ type: "normal" }],
	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [708],

	thirdParty: {
		cardmarket: 876937
	}
};

export default card;
