import { Card } from "../../../interfaces";
import Set from "../CP2";

const card: Card = {
	set: Set,
	name: {
		ja: "アルセウス",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひかりをあつめる" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のベンチポケモンについているエネルギーを好きなだけ選び、このポケモンにつけ替える。",
			},
		},
		{
			name: { ja: "ジャッジメントバースト" },
			damage: "10+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている基本エネルギーのタイプの数x30ダメージを追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 563505,
				tcgplayer: 605328,
			},
		},
	],

	retreat: 2,
	rarity: "Rare",
	dexId: [493],
};

export default card;
