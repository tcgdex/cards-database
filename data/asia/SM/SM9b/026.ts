import { Card } from "models/database/card";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カポエラー",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'ja-jp': "コマのように 回転しながら 戦う。 遠心力の パワーで 破壊力は １０倍だ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "フィニッシュコンボ" },
			cost: ["Fighting"],
			effect: {
				'ja-jp': "このワザは、前の自分の番に「サワムラー」が「スペシャルコンボ」を使っていなければ使えない。相手のポケモン全員に、それぞれ60ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "かいてんアタック" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558144,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [237],
};

export default card;
