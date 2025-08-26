import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "Typhlosion -074/128",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [157],
	hp: 100,
	types: ["Fire"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "加熱します",
			},
			effect: {
				ja: "ターン中に（攻撃の前）、</em>は、すべてのPokmonと対戦相手のすべてのPokmonに取り付けられたエネルギーカードの総数を数えることができます。対戦相手がより多くのエネルギーカードを添付している場合は、デッキを1つのFire Energyカードで検索し、ベンチ付きPokmonの1つに添付することができます。その後、デッキをシャッフルします。害虫が特別な状態の影響を受ける場合、この力は使用できません。",
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

};

export default card
