import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "チラチーノ",
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'ja-jp': "塵ひとつ 許せない 潔癖。 体から 染み出る 油を 巣に 塗りつけ コーティングする。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひっぱたく" },
			damage: 30,
			cost: ["Colorless"],
		},
		{
			name: { ja: "スペシャルころころ" },
			damage: "70×",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについている特殊エネルギーの枚数×70ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752841,
				tcgplayer: 568394,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "チラーミィ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [573],
};

export default card;
