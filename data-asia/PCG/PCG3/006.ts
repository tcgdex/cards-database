import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "レディアン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [166],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "粉末保護",
			},
			effect: {
				ja: "その名前に所有者がいるポカンからの攻撃により、レディアンに与えられた損害は40減少します。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "スパイラルパンチを分割します",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
			},
			damage: 20,
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				ja: "取り組む",
			},
			damage: 50,
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
