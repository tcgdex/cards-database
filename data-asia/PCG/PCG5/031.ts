import { Card } from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "ハンテイル",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [367],
	hp: 80,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "リアクティブジェネレーター",
			},
			effect: {
				ja: "ターン中（攻撃の前に）一度、HuntailにReact Energy Cardが接続されていない場合は、Deckを検索してReact Energyカードを検索してハンテールに添付できます。その後、デッキをシャッフルします。 Huntailが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				ja: "噛む",
			},
			effect: {
				ja: "防御ポケモンがポケモン-Exの場合、この攻撃は40ダメージに加えて30ダメージを与えます。",
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
