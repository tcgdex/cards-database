import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		// Vulpix
		ja: "ロコン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [37],
	hp: 50,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fire", "Fire"],
			name: {
				ja: "レイを混乱させます",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575599
			},
		},
		{
			type: "normal",
			subtype: "no-rarity",
			thirdParty: {
				tcgplayer: 577026
			},
		}
	],
};

export default card
