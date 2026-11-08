import { Card } from "models/database/card"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "未定のp",
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
				'ja-jp': "実行[実行]",
			},
			effect: {
				'ja-jp': "攻撃が対戦相手の最後のターン中に[P]に損傷を受けていない場合、[P]がアクティブなポクモンであった場合、[P]の隠されたパワーアタックは、防御するポクモンにはるかに多くのダメージを与えます。このパワーは、[P]が混乱していなくても使用できます。",
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
