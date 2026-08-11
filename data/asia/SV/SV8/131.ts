import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "ミロカロスex",
	},

	illustrator: "Kuroimori",
	category: "Pokemon",
	hp: 270,
	types: ["Water"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "きらめくウロコ" },
			effect: {
				ja: "このポケモンは、相手の「テラスタル」のポケモンからワザのダメージや効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ヒプノスプラッシュ" },
			damage: 160,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 793596,
				tcgplayer: 587698,
			},
		},
	],

	evolveFrom: {
		ja: "ヒンバス",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Special illustration rare",
	dexId: [350],

	suffix: "EX",
};

export default card;
