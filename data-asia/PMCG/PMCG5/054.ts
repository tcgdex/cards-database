import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "ロケットのヒットモンチャン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [107],
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				ja: "クロスカウンター",
			},
			effect: {
				ja: "攻撃が相手の次のターン中にロケットのヒットモンチャンにダメージを与えた場合（ロケットのヒットモンチャンがノックアウトされたとしても）、コインをひっくり返します。ヘッドの場合、ロケットのヒットモンチャンは、相手のアクティブなポケモンを攻撃し、その量のダメージを2倍にします。 （RocketのHitmonchanが20ダメージを与えた場合、そのポケモンに40ダメージを与えます。）",
			},
		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				ja: "マグナムパンチ",
			},
			damage: 50,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
