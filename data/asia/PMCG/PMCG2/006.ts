import { Card } from "models/database/card"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "タマタマ",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	dexId: [102],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "催眠",
			},
			effect: {
				'ja-jp': "防御ポケモンは今眠っています。",
			},

		},
		{
			cost: ["Grass", "Grass"],
			name: {
				'ja-jp': "リーチシード",
			},
			effect: {
				'ja-jp': "この攻撃からのすべての損傷が防止されない限り、ExeggCuteから1つのダメージカウンターを削除できます。",
			},
			damage: 20,
		},
	],

	retreat: 3,

	variants : [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576617
			},
		},
	],
};

export default card
