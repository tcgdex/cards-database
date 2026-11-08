import { Card } from "models/database/card"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "l",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [201],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'ja-jp': "笑[笑]",
			},
			effect: {
				'ja-jp': "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合、各プレイヤーはデッキをシャッフルします。この力は、眠っていない、混乱している、または麻痺している場合でも使用できます。",
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

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
