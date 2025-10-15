import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "togetic",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [176],
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "聖なる盾",
			},
			effect: {
				ja: "攻撃のすべての影響を防ぎ、ダメージは、その名前が暗くなっている相手のPokã©Monによって行われます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "ダイビング",
			},
			damage: 30,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "虹の動き",
			},
			effect: {
				ja: "対戦相手のベンチポケモンの攻撃の1つを選択します。レインボーは、エネルギーコストを除いて、その攻撃をコピーします。 （あなたはまだその攻撃に必要な他のことをしなければなりません。）（ポケモンがどんなタイプであっても、Togeticのタイプはまだ無色です。）Togeticはその攻撃を実行します。",
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
