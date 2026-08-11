import { Card } from "models/database/card";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヨクバリスVMAX",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 320,
	types: ["Colorless"],

	stage: "VMAX",

	attacks: [
		{
			name: { ja: "まるもうけ" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "このワザのダメージで、相手のたねポケモンがきぜつしたなら、サイドを2枚多くとる。",
			},
		},
		{
			name: { ja: "ダイゴウヨク" },
			damage: 160,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分の山札を3枚引く。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 576198,
				tcgplayer: 569621,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヨクバリスV",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Hyper rare",
	dexId: [820],
};

export default card;
