import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のニドキングex",
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ダーティホーン" },
			damage: 100,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は8個になる。",
			},
		},
		{
			name: { ja: "キングインパクト" },
			damage: 240,
			cost: ["Darkness", "Darkness", "Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821958,
				tcgplayer: 629067,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のニドリーノ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Special illustration rare",
	dexId: [34],

	suffix: "EX",
};

export default card;
