import { Card } from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "ニンジャスク",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [291],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "迅速な保護",
			},
			effect: {
				ja: "彼または彼女の基本的なポカンからの相手の攻撃によってニンジャスクに与えられた損傷を含むすべての効果を防​​ぎます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "剣の踊り",
			},
			effect: {
				ja: "次のターン中、ニンジャスクのスラッシュ攻撃のベースダメージは80です。",
			},
		},
		{
			cost: ["Colorless"],
			name: {
				ja: "スラッシュ",
			},
			damage: 30,
		},
	],


	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
