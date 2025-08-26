import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "sableye",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [302],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "相乗効果",
			},
			effect: {
				ja: "フィービーのスタジアムが機能している場合は、相手のPokã©Mon-Exからの攻撃によってSableyeに与えられたすべての損害を防ぎます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ダウンドロー",
			},
			effect: {
				ja: "デッキの底から2枚のカードを描きます。",
			},
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "FEINT攻撃",
			},
			effect: {
				ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに20のダメージを与えます。この攻撃の損傷は、脱力感、抵抗、ポケの提唱、ポケボディ、またはそのポケモンに対するその他の影響の影響を受けません。",
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
