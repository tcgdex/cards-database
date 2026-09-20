import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ミュウ",
	},

	illustrator: "YOSHIROTTEN",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "今でも 幻の ポケモンと いわれる。その姿を 見たものは 全国でも ほとんど いない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "サイコキネシス" },
			damage: "10+",
			cost: ["Psychic", "Psychic"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [{ type: "holo" }],

	retreat: 1,
	regulationMark: "J",
	rarity: "RGB Rare",
	dexId: [151],
};

export default card;
