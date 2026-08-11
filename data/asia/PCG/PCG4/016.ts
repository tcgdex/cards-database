import { Card } from "models/database/card"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マグカルゴ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [219],
	hp: 80,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "デュアルアーマー",
			},
			effect: {
				'ja-jp': "Magcargoにはそれに格闘エネルギーが付いている限り、Magcargoは火災と戦闘タイプの両方です。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Colorless"],
			name: {
				'ja-jp': "煙幕",
			},
			effect: {
				'ja-jp': "防衛ポケモンが相手の次のターン中に攻撃を試みた場合、対戦相手はコインをひっくり返します。尾の場合、その攻撃は何もしません。",
			},
			damage: 30,
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: {
				'ja-jp': "余分な炎",
			},
			effect: {
				'ja-jp': "防御ポケモンがポケモン-Exの場合、この攻撃は40ダメージに加えて30ダメージを与えます。",
			},
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
