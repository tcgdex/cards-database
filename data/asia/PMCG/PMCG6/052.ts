import { Card } from "models/database/card"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ナツメのルージュラ",
	},
	illustrator: "Atsuko Nishida",

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [124],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "手伝います",
			},
			effect: {
				'ja-jp': "対戦相手のポケモンを1つ選択します。そのポケモンから数のダメージカウンターを削除し、その多くのカードを描きます。",
			},
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				'ja-jp': "ハグ",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防衛ポケモンは相手の次のターン中に退却することはできません。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575389
			},
		},
	],
};

export default card
