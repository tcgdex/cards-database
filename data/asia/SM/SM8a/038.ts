import { Card } from "models/database/card";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ナットレイ",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		'ja-jp': "洞穴の 天井に はりつき 下を 通る 獲物に 向かって 鉄の トゲを 打ちこみ 襲う。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ガードプレス" },
			damage: 20,
			cost: ["Metal"],
			effect: {
				'ja-jp': "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。",
			},
		},
		{
			name: { ja: "スローンポッドスロー" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のベンチポケモン1匹にも、このポケモンについている[鋼]エネルギーの数x20ダメージ。ベンチへのダメージは[鋼]エネルギー5個ぶんまで。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558612,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "テッシード",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [598],
};

export default card;
