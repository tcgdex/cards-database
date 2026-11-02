import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "フリーザー",
	},

	illustrator: "Yusuke Ohmura",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "伝説の とりポケモン。 空気中の 水分を 凍らせ 吹雪を 作り出すことが できる。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ブリザードヴェール" },
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、自分のベンチの[水]ポケモン全員は、相手が手札からサポートを出して使ったとき、その効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "コールドサイクロン" },
			damage: 70,
			cost: ["Water", "Water"],
			effect: {
				ja: "このポケモンについている[水]エネルギーを2個、ベンチポケモン1匹につけ替える。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558308,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [144],
};

export default card;
