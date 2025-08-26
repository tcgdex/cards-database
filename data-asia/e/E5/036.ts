import { Card } from "../../../interfaces"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		ja: "マグナイト",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [81],
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "サンダーウェーブ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
		},
		{
			cost: ["Lightning"],
			name: {
				ja: "磁気線",
			},
			effect: {
				ja: "防衛ポケモンに基本的なエネルギーカードが付いている場合は、コインをひっくり返します。頭の場合は、それらのエネルギーカードの1枚を選択し、相手のベンチポケモンの1つに移動します。相手がベンチポケモンを持っていない場合は、この効果を無視してください。",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
