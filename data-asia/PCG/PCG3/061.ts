import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "Rocket's Scyther Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [123],
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "デュアルアーマー",
			},
			effect: {
				ja: "RocketのScyther Exが草のエネルギーを持っている限り、RocketのScyther Exは草と闇の両方のタイプです。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "バウンス",
			},
			effect: {
				ja: "攻撃の後、ロケットのScyther Exを1匹のベンチポケモンで切り替えることができます。",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "スラッシングストライク",
			},
			effect: {
				ja: "RocketのScyther Exは、次のターン中にスラッシングストライクを使用できません。",
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

export default card
