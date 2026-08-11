import { Card } from "models/database/card";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シロデスナex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Psychic"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "すなじごく" },
			damage: 160,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "バライトジェイル" },
			cost: ["Water", "Psychic", "Fighting"],
			effect: {
				'ja-jp': "相手のベンチポケモン全員に、それぞれ残りHPが「100」になるように、ダメカンをのせる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 793588,
				tcgplayer: 587695,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "スナバァ",
	},

	retreat: 4,
	regulationMark: "H",
	rarity: "Ultra Rare",
	dexId: [770],

	suffix: "EX",
};

export default card;
