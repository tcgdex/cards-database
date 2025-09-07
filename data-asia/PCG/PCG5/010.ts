import { Card } from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "Dustox Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [269],
	hp: 140,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "保護",
			},
			effect: {
				ja: "対戦相手のPokã©Mon-ExによってDustox Exに行われたダメージを含む攻撃のすべての影響を防ぎます。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "銀風",
			},
			effect: {
				ja: "次のターン中に、攻撃が防御ポケモンにダメージを与えた場合（脱力感と抵抗を適用した後）、その攻撃はさらに30のダメージを与えます。",
			},
			damage: 40,
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				ja: "風を切る",
			},
			damage: 70,
		},
	],

	retreat: 1,

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
