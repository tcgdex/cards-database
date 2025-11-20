import { Card } from "../../../interfaces"
import Set from "../PMCG1"
import InternationCard from "../../../data/Base/Base Set/33.ts";

const card: Card = {
	set: Set,
	name: {
		ja: "カクナ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [14],
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "硬直",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、相手の次のターン中にカクナにすべての損害を与えないようにします。 （攻撃の他の影響はまだ発生しています。）",
			},

		},
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "毒パウダー",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
			},
			damage: 20,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],

	related: [
		{
			type: "translation",
			card: InternationCard
		}
	]
};

export default card
