import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ムシャーナ",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "おでこから 出ている 煙の 中には 人や ポケモンの 見た 夢が たくさん つまっているのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ねだめ" },
			cost: ["Colorless"],
			effect: {
				ja: "おたがいのバトルポケモンを、それぞれねむりにする。次の自分の番、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+100」される。",
			},
		},
		{
			name: { ja: "しねんのずつき" },
			damage: 50,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557297,
			},
		},
	],

	evolveFrom: {
		ja: "ムンナ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [518],
};

export default card;
