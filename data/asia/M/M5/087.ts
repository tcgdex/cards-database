import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤドラン",
	},

	illustrator: "Mekayu",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "スッカラカン" },
			damage: "50+",
			cost: ["Psychic"],
			effect: {
				ja: "自分の手札が1枚もないなら、160ダメージ追加。",
			},
		},
		{
			name: { ja: "しねんのずつき" },
			damage: 110,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888632,
			},
		},
	],

	evolveFrom: {
		ja: "ヤドン",
	},

	retreat: 3,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [80],
};

export default card;
