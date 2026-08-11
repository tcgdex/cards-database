import { Card } from "models/database/card"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒトカゲ",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	dexId: [4],
	hp: 50,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "傷",
			},
			damage: 10,
		},
		{
			cost: ["Fire", "Colorless"],
			name: {
				'ja-jp': "ember",
			},
			effect: {
				'ja-jp': "このポケモンから火エネルギーを捨ててください。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575573
			},
		},
		{
			type: "normal",
			subtype: "no-rarity",
			thirdParty: {
				tcgplayer: 577000
			},
		}
	],
};

export default card
