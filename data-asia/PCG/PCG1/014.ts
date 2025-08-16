import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "venomoth",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [49],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "保護ダスト",
			},
			effect: {
				ja: "攻撃するポカンによって毒液に与えられた損傷を除く攻撃のすべての影響を防ぎます。",
			},
		}],

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "眠り毒",
			},
			effect: {
				ja: "防御するポケモンは今眠っていて毒されています。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "かみそりの風",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 60,
		},
	],


	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
