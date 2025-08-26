import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "Muk",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [89],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "有毒ガス",
			},
			effect: {
				ja: "有毒ガス以外のすべてのポケモンパワーを無視します。 MUKは特別な状態の影響を受けている間、このパワーは機能しなくなります。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				ja: "スラッジ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
