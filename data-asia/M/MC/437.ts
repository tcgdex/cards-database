import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のニドキングex",
	},

	illustrator: "5ban Graphics",
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
			type: "normal",
			thirdParty: {
				cardmarket: 863739,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のニドリーノ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [34],

	suffix: "EX",
};

export default card;
