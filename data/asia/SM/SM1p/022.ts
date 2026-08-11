import { Card } from "../../../interfaces";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		ja: "オドリドリ",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "やまぶきのミツを 吸った オドリドリ。 明るく 陽気な ダンスで 敵の 身も 心も 弾けさせる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "フェザーダンス" },
			cost: ["Lightning"],
			effect: {
				ja: "次の自分の番、このポケモンの「ぱちぱちパンチ」のダメージは「100」になる。",
			},
		},
		{
			name: { ja: "ぱちぱちパンチ" },
			damage: 20,
			cost: ["Lightning"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561550,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [741],
};

export default card;
