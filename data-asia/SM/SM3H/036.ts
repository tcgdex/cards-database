import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "カラマネロ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "ポケモンで 一番 強力な 催眠術を 使う。 相手を 意のままに 操ってしまうのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "サイケこうせん" },
			damage: 20,
			cost: ["Darkness"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "エナジースロッシュ" },
			damage: 70,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、このポケモンについているエネルギーをすべて、ベンチポケモン1匹につけ替える。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561100,
			},
		},
	],

	evolveFrom: {
		ja: "マーイーカ",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [687],
};

export default card;
