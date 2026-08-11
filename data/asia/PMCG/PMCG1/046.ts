import { Card } from "models/database/card"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ユンゲラー",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [64],
	hp: 60,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic", "Psychic"],
			name: {
				'ja-jp': "回復する",
			},
			effect: {
				'ja-jp': "Kadabraに取り付けられた1つのサイキックエネルギーカードを捨てたり、この攻撃は何もしません。 Kadabraからすべてのダメージカウンターを削除します。",
			},

		},
		{
			cost: ["Psychic", "Psychic", "Colorless"],
			name: {
				'ja-jp': "Super Psy",
			},
			damage: 50,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575644
			},
		},
		{
			type: "normal",
			subtype: "no-rarity",
			thirdParty: {
				tcgplayer: 577071
			}
		}
	],
};

export default card
