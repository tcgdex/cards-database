import { Card } from "models/database/card";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "バクオング",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		'ja-jp': "戦いのときに 出す うなり声は まるで 地震の ように 地面を グラグラと 揺らす。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "デスライブ" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "ダメカンがのっている相手のベンチポケモン全員にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "ヘビーインパクト" },
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559035,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ドゴーム",
	},

	retreat: 4,
	rarity: "Uncommon",
	dexId: [295],
};

export default card;
