import { Card } from "../../../interfaces"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		ja: "デューゴン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [87],
	hp: 80,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "フリーズロック",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、対戦相手は次のターン中に自分の手からアクティブなポケモンにエネルギーカードを取り付けることができません。",
			},
			damage: 20,
		},
		{
			cost: ["Water", "Water", "Colorless", "Colorless"],
			name: {
				ja: "氷の粉砕",
			},
			effect: {
				ja: "この攻撃は、防御ポケモンのリトリートコストで、40のダメージに加えて、無色のエネルギーごとに10ダメージを与えます。損傷は、リトリートコストに効果を適用した後、防御ポケモンのリトリートコストを使用して計算されます。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st Edition"],
		},
	],
};

export default card
