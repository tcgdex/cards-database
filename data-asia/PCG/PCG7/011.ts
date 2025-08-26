import { Card } from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
	set: Set,
	name: {
		ja: "キングドラ（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [230],
	hp: 110,
	types: ["Fire"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ドラゴンの呪い",
			},
			effect: {
				ja: "ターン中（攻撃の前に）、KingdraがアクティブなPokã©Monである場合、カードにDeltaを使用した相手のPokã©Monの1つに2つのダメージカウンターを入れることができます。 Kingdraが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Colorless"],
			name: {
				ja: "余分な炎",
			},
			effect: {
				ja: "防御ポケモンがポケモンエクスの場合、この攻撃は30ダメージに加えて30ダメージを与えます。",
			},
		},
		{
			cost: ["Fire", "Metal", "Colorless", "Colorless"],
			name: {
				ja: "ヒートブラスト",
			},
			damage: 80,
		},
	],

	retreat: 2,

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
