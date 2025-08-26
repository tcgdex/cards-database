import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "サブリナの毒液",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [49],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "癒しの花粉",
			},
			effect: {
				ja: "3コインをフリップします。各ヘッドについて、各ポケモンから1つのダメージカウンターを取り外します。ポケモンがヘッド数よりもダメージカウンターが少ない場合は、それらすべてを削除します。",
			},
		},
		{
			cost: ["Psychic"],
			name: {
				ja: "音の歪み",
			},
			effect: {
				ja: "2つのコインをフリップします。それらの1つまたは両方がヘッドである場合、防御ポケモンは今混乱しています。",
			},
			damage: 10,
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
