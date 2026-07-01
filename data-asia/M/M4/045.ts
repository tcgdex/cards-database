import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,

	name: {
		ja: "ドンファン",
	},

	illustrator: "Julie Hang",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "普段は 落ち着いているが 一度 怒らせると 体を 丸めて 回転しながら 突っ込んでくる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "たたみかける",
			},
			damage: 20,
			cost: ["Fighting"],
			effect: {
				ja: "次の自分の番、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+120」される。",
			},
		},
		{
			name: {
				ja: "スマッシュヘッド",
			},
			damage: 180,
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],
	variants: [{ type: "normal" }],
	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [232],

	thirdParty: {
		cardmarket: 876944
	}
};

export default card;
