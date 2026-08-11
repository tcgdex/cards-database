import { Card } from "models/database/card";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゴウカザル",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'ja-jp': "素早さで 相手を 翻弄する。 両手 両足を 使った 独特の 戦い方を する。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "あつきとうし" },
			effect: {
				'ja-jp': "このポケモンがいるかぎり、相手のバトルポケモンは、やけどでのせるダメカンの数が6個になる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "バーストパンチ" },
			damage: 50,
			cost: ["Fighting", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559775,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "モウカザル",
	},

	retreat: 1,
	rarity: "None",
	dexId: [392],
};

export default card;
