import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ネッコアラ",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "生まれてから ずっと 眠ったまま。 深い 眠りに 落ちているときは 一切 動かなくなる。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ゆめうつつ" },
			effect: {
				ja: "このポケモンがねむりのとき、ポケモンチェックで、このポケモンがねむりから回復しなかったなら、相手のバトルポケモンに、ダメカンを6個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "うとうと" },
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557042,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [775],
};

export default card;
