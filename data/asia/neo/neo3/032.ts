import { Card } from "models/database/card"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "b",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [201],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			name: {
				'ja-jp': "bear [bear]",
			},
			effect: {
				'ja-jp': "ターン中に（攻撃の前）</em> </em>、1つのポケモンから1つのダメージカウンターを、名前に由来していない[B]を動かすことができます[B]。 [B]が10 hpの残りの場合、この電力は使用できません。この力は、眠っていない場合でも、眠っていても混乱している、または麻痺している場合でも使用できます。",
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
