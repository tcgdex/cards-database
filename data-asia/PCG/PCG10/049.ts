import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "メディチャム",
	},


	category: "Pokemon",
	dexId: [308],
	hp: 80,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "活発なオーラ",
			},
			effect: {
				ja: "MedichamがあなたのアクティブなPokã©Monである限り、各プレイヤーのアクティブなPokã©Monによる攻撃は、アクティブなPokã©Monにさらに10ダメージを与えます（脱力感と抵抗を適用する前）。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "パンチ",
			},
			damage: 30,
		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				ja: "ローリングキック",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 40,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
