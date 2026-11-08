import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "クレッフィ",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'ja-jp': "昔の 貴族は 金庫の カギを 管理させる クレッフィを 代々 引き継ぎ 大切に 扱った。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "いたずらロック" },
			effect: {
				'ja-jp': "このポケモンがバトル場にいるかぎり、おたがいの場のたねポケモンの特性（「いたずらロック」をのぞく）は、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ねらいおとす" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 751821,
				tcgplayer: 587873,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [707],
};

export default card;
