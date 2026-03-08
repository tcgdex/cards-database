import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "アズマリル",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [184],
	hp: 80,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "泡",
			},
			effect: {
				ja: "ターン中に、アクティブなPokã©Monの1つを進化させるためにAzumarillを手から演奏すると、このパワーを使用できます。それぞれの防御ポケモンは現在麻痺しています。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "ウォーターパンチ",
			},
			effect: {
				ja: "アズマリルに取り付けられた各水エネルギーのコインをひっくり返します。この攻撃は20のダメージに加えて、各ヘッドに対して20のダメージをさらに発生させます。",
			},
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

export default card
