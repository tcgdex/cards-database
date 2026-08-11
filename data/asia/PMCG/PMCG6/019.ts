import { Card } from "models/database/card"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "キョウのアーボック",
	},
	illustrator: "Ken Sugimori",

	rarity: "Rare",
	category: "Pokemon",
	dexId: [24],
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "毒物の蓄積",
			},
			effect: {
				'ja-jp': "コガのアーボックは現在毒されています。",
			},
		},
		{
			cost: ["Grass", "Grass"],
			name: {
				'ja-jp': "毒力",
			},
			effect: {
				'ja-jp': "KogaのArbokが毒されている場合、この攻撃のベースダメージは20ではなく40であり、防御ポケモンが毒されています。",
			},
			damage: 20,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575351
			},
		},
	],
};

export default card
