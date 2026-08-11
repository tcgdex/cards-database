import { Card } from "models/database/card";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アップリューVMAX",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 320,
	types: ["Grass"],

	stage: "VMAX",

	attacks: [
		{
			name: { ja: "キョダイローリング 250-" },
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにのっているダメカンの数×10ダメージぶん、このワザのダメージは小さくなる。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 538613,
				tcgplayer: 569031,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "アップリューV",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Hyper rare",
	dexId: [841],
};

export default card;
