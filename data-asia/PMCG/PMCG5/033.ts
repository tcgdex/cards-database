import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "ミスティのテンタクルエル",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [73],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "逃げる",
			},
			effect: {
				ja: "攻撃があなたのアクティブなPokmonである間にMistyのTentacruelにダメージを与えた場合、あなたはそれをあなたのベンチ付きPokmonで1つに切り替えることができます。 MistyのTentacruelがすでに眠っている、混乱し、麻痺している場合、この力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Water", "Colorless", "Colorless"],
			name: {
				ja: "クラゲの毒",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。尾の場合、防御ポケモンは混乱しています。",
			},
			damage: 30,
		},
	],


	variants: [
		{
			type: "holo",
		},
	],
};

export default card
