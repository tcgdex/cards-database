import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ミカルゲ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "１０８個の 魂が 集まって 生まれた ポケモン。 要石の ひび割れに つながれている。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "うらみだめ" },
			effect: {
				ja: "自分の番に1回使える。このポケモンにダメカンを1個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "くもんのさけび" },
			damage: "10+",
			cost: ["Darkness"],
			effect: {
				ja: "このポケモンにのっているダメカンの数x30ダメージ追加。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557415,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [442],
};

export default card;
