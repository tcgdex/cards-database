import { Card } from "models/database/card"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "タケシのサイホーン",
	},
	illustrator: "Ken Sugimori",

	rarity: "Common",
	category: "Pokemon",
	dexId: [111],
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				'ja-jp': "ドリルタックル",
			},
			effect: {
				'ja-jp': "2つのコインをフリップします。それらの1つまたは両方が尾の場合、この攻撃は何もしません。",
			},
			damage: 70,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576764
			},
		},
	],
};

export default card
