import { Card } from "models/database/card";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ノクタス",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'ja-jp': "砂漠の 旅人の 後ろを 集団で つきまとい 疲れて 動けなく なるのを 待つのだ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "トゲトゲどく" },
			effect: {
				'ja-jp': "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンをどくにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "だましうち" },
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のポケモン1匹に、50ダメージ。このワザのダメージは、弱点・抵抗力と、ダメージを受けるポケモンにかかっている効果を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559158,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "サボネア",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [332],
};

export default card;
