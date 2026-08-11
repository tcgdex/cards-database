import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲンガーex",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 310,
	types: ["Darkness"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "むしばむのろい" },
			effect: {
				ja: "このポケモンがいるかぎり、相手は手札からエネルギーをポケモンにつけるたび、そのポケモンにダメカンを2個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "トリックステップ" },
			damage: 160,
			cost: ["Darkness", "Darkness"],
			effect: {
				ja: "のぞむなら、相手のバトルポケモンについているエネルギーを1個選び、相手のベンチポケモンにつけ替える。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863747,
			},
		},
	],

	evolveFrom: {
		ja: "ゴースト",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [94],

	suffix: "EX",
};

export default card;
