import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "エルレイドV",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ライジングソード" },
			damage: "20+",
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "自分がすでにとったサイドの枚数×50ダメージ追加。",
			},
		},
		{
			name: { ja: "バスタースイング" },
			damage: 130,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "このワザのダメージは抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 657060,
				tcgplayer: 570744,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Ultra Rare",
	dexId: [475],
};

export default card;
