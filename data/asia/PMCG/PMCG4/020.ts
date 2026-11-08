import { Card } from "models/database/card"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "コイキング",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [129],
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "フロップ",
			},
			damage: 10,
		},
		{
			cost: ["Water", "Water", "Water"],
			name: {
				'ja-jp': "急速な進化",
			},
			effect: {
				'ja-jp': "Magikarpから進化するカードをデッキで検索し、このポケモンに置いてください。 （これはこのポケモンを進化させるものとしてカウントされます。）その後、デッキをシャッフルします。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575727
			},
		},
	],
};

export default card
