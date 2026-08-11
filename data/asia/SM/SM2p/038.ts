import { Card } from "models/database/card";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マニューラ",
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		'ja-jp': "４〜５匹の グループで 行動。 岩や 樹木に サインを 残し 連係プレイで 獲物を 仕留める。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "あくのおきて" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "おたがいの場の特性を持つポケモン全員に、それぞれ60ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "きりさく" },
			damage: 70,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561281,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ニューラ",
	},

	retreat: 0,
	rarity: "None",
	dexId: [461],
};

export default card;
