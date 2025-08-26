import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "slowpoke",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [79],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "間隔",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、slowpokeからダメージカウンターを取り外します。 SlowPokeにダメージカウンターがない場合、この攻撃は使用できません。",
			},

		},
		{
			cost: ["Psychic", "Psychic"],
			name: {
				ja: "清掃",
			},
			effect: {
				ja: "この攻撃を使用するために、SlowPokeに取り付けられた1つのサイキックエネルギーカードを捨てます。廃棄の山からトレーナーカードを手に入れてください。",
			},

		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
