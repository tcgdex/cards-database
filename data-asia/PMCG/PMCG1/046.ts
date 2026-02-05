import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "カダブラ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [64],
	hp: 60,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic", "Psychic"],
			name: {
				ja: "回復する",
			},
			effect: {
				ja: "Kadabraに取り付けられた1つのサイキックエネルギーカードを捨てたり、この攻撃は何もしません。 Kadabraからすべてのダメージカウンターを削除します。",
			},

		},
		{
			cost: ["Psychic", "Psychic", "Colorless"],
			name: {
				ja: "Super Psy",
			},
			damage: 50,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
		},
	],

	related: [
		{
			type: "translation",
			cardPath: "data/Base/Base Set/32.ts"
		}
	]
};

export default card
