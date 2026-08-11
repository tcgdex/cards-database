import { Card } from "models/database/card"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "暗いハンター",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [93],
	hp: 50,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "折り返し電話",
			},
			effect: {
				'ja-jp': "ベビーポケモンまたは基本的なポケモンカードを、相手の捨てられた山からベンチに置きます。そのポケモンに1つのダメージカウンターを置きます。 （対戦相手のベンチがいっぱいになった場合、この攻撃を使用できません。）",
			},
		},
		{
			cost: ["Psychic", "Psychic"],
			name: {
				'ja-jp': "囲む",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御するポケモンは今眠っています。テールの場合、防衛ポケモンは相手の次のターン中に退却することはできません。",
			},
			damage: 20,
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
