import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "デオキシス",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "宇宙ウイルスが 突然変異を 起こして ポケモンに なった。 オーロラの 近くに 現れる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "サイコキネシス" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数x20ダメージ追加。",
			},
		},
		{
			name: { ja: "パワーブラスト" },
			damage: 120,
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559003,
			},
		},
	],

	retreat: 1,
	rarity: "Rare",
	dexId: [386],
};

export default card;
