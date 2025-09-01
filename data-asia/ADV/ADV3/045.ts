import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "シェルゴン",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [372],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "スクランチ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、対戦相手の次のターン中にシェルゴンにすべてのダメージを与えないようにします。 （攻撃の他の影響はまだ発生しています。）",
			},
		},
		{
			cost: ["Fire", "Water", "Colorless"],
			name: {
				ja: "ローリング攻撃",
			},
			damage: 50,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
