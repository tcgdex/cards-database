import { Card } from "models/database/card";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ミロカロスex",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 270,
	types: ["Water"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "きらめくウロコ" },
			effect: {
				'ja-jp': "このポケモンは、相手の「テラスタル」のポケモンからワザのダメージや効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ヒプノスプラッシュ" },
			damage: 160,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 793585,
				tcgplayer: 587717,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヒンバス",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Ultra Rare",
	dexId: [350],

	suffix: "EX",
};

export default card;
