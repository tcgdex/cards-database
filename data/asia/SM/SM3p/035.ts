import { Card } from "models/database/card";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マイナン",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'ja-jp': "マイナンと プラスルの 電気は 血液の 流れを 良くして こりを ほぐす 効果が ある。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "もってくる" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札を1枚引く。",
			},
		},
		{
			name: { ja: "スパーク" },
			damage: 20,
			cost: ["Lightning"],
			effect: {
				'ja-jp': "相手のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560193,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [312],
};

export default card;
