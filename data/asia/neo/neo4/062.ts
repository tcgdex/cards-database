import { Card } from "models/database/card"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "g",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [201],
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'ja-jp': "give [giv]",
			},
			effect: {
				'ja-jp': "ターン中に（攻撃の前）</em> </em>、[g]、own own [i]、own [v]、および[e]がベンチにある場合、コインをひっくり返すことができます。頭の場合は、デッキを検索して基本的なエネルギーカードを探して、1枚のポクモンに取り付けます。その後、デッキをシャッフルします。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "隠された力",
			},
			damage: 10,
		},
	],

	retreat: 1,

};

export default card
