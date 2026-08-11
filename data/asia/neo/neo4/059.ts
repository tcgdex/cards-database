import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "Q",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [201],
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "Quicken [Quicken]",
			},
			effect: {
				ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合は、被害を含む攻撃のすべての影響を防ぎ、相手の次のターン中に名前が付けられていないPokmonのいずれかに対して行われます。プレイ中に複数の[Q]を使用している場合は、ターンごとに1 [Quicken]のみを使用します。 [Q]が眠っていない、混乱し、麻痺している場合でも、このパワーを使用できます。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "隠された力",
			},
			damage: 10,
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
