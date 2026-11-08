import { Card } from "models/database/card";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オニシズクモ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'ja-jp': "頭部の 水泡で ヘッドバット。 小さなポケモンで あれば そのまま 水泡に 取り込まれ 溺れ死ぬ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "すいほう" },
			effect: {
				'ja-jp': "このポケモンは、相手の[炎]ポケモンからワザのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "アクアエッジ" },
			damage: 70,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560038,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "シズクモ",
	},

	retreat: 2,
	rarity: "None",
	dexId: [752],
};

export default card;
