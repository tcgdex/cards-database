import { Card } from "models/database/card"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スリープ",
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	dexId: [96],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ポンド",
			},
			damage: 10,
		},
		{
			cost: ["Psychic", "Psychic"],
			name: {
				'ja-jp': "レイを混乱させます",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575576
			},
		},
		{
			type: "normal",
			subtype: "no-rarity",
			thirdParty: {
				tcgplayer: 577003
			}
		}
	],
};

export default card
