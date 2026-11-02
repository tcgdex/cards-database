import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "グラエナ",
	},

	illustrator: "Yano Keiji",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "優れた トレーナーの 命令には 絶対に 服従。大昔に 群れで 行動していた 名残り。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "けりとばす" },
			damage: 50,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
		{
			name: { ja: "するどいキバ" },
			damage: 130,
			cost: ["Darkness", "Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864055,
			},
		},
	],

	evolveFrom: {
		ja: "ポチエナ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [262],
};

export default card;
