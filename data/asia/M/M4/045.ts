import { Card } from "models/database/card";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドンファン",
	},

	illustrator: "Julie Hang",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		'ja-jp': "普段は 落ち着いているが 一度 怒らせると 体を 丸めて 回転しながら 突っ込んでくる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "たたみかける" },
			damage: 20,
			cost: ["Fighting"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+120」される。",
			},
		},
		{
			name: { ja: "スマッシュヘッド" },
			damage: 180,
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを2個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876944,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ゴマゾウ",
	},

	retreat: 3,
	regulationMark: "J",
	rarity: "Common",
	dexId: [232],
};

export default card;
