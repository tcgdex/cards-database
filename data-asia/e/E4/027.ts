import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		ja: "Vaporeon",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [134],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "自己癒し",
			},
			effect: {
				ja: "手からVaporeonに水エネルギーカードを取り付けるときはいつでも、Vaporeonに影響を与えるすべての特別な条件を削除します。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "Hypnosplash",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},
			damage: 10,
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				ja: "アクアトリック",
			},
			effect: {
				ja: "防衛ポケモンにエネルギーカードが付いている場合は、コインをひっくり返します。頭の場合は、それらのエネルギーカードの1枚を選択し、相手のベンチポケモンの1つに移動します。相手がベンチポケモンを持っていない場合は、この効果を無視してください。",
			},
			damage: 40,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
