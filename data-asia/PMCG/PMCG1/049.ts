import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "アラカザム",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [65],
	hp: 80,
	types: ["Psychic"],
	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "ダメージスワップ",
			},
			effect: {
				ja: "ターン<em>（攻撃の前）</em>中に好きなように、ポクモンをノックアウトしない限り、1ダメージカウンター1から別のダメージカウンターを移動できます。アラカザムが特別な状態の影響を受けている場合、この力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Psychic", "Psychic"],
			name: {
				ja: "レイを混乱させます",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
			},
			damage: 30,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
	],

	related: [
		{
			type: "translation",
			cardPath: "data/Base/Base Set/1.ts"
		}
	]
};

export default card
