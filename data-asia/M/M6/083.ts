import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ラブトロス",
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "けしんだんけつ" },
			effect: {
				ja: "自分の場に「トルネロス」「ボルトロス」「ランドロス」「ラブトロス」がいるなら、このポケモンはワザを使うための[C]エネルギーが、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ライジングハート" },
			damage: "100+",
			cost: ["Psychic", "Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが「ポケモンex」なら、100ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900109,
				tcgplayer: 709236,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Mega Hyper Rare",
	dexId: [905],
};

export default card;
