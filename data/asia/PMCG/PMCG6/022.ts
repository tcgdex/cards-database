import { Card } from "models/database/card"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ナツメのモルフォン",
	},
	illustrator: "Ken Sugimori",

	rarity: "Rare",
	category: "Pokemon",
	dexId: [49],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "癒しの花粉",
			},
			effect: {
				'ja-jp': "3コインをフリップします。各ヘッドについて、各ポケモンから1つのダメージカウンターを取り外します。ポケモンがヘッド数よりもダメージカウンターが少ない場合は、それらすべてを削除します。",
			},
		},
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "音の歪み",
			},
			effect: {
				'ja-jp': "2つのコインをフリップします。それらの1つまたは両方がヘッドである場合、防御ポケモンは今混乱しています。",
			},
			damage: 10,
		},
	],


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575359
			},
		},
	],
};

export default card
