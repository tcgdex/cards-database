import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "染色",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [157],
	hp: 100,
	types: ["Fire"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "加熱します",
			},
			effect: {
				ja: "ターン中（攻撃前）に、すべてのPokmonと対戦相手のPokmonに取り付けられたエネルギーカードの総数をカウントできます。対戦相手がより多くのエネルギーカードを添付している場合は、デッキを1つのFire Energyカードで検索し、ベンチ付きPokmonの1つに添付することができます。その後、デッキをシャッフルします。害虫が特別な状態の影響を受ける場合、この力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Fire", "Colorless", "Colorless"],
			name: {
				ja: "スーパーシング",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御するポケモンが燃やされます。",
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
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
