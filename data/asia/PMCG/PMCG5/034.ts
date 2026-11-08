import { Card } from "models/database/card"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カスミのシードラ",
	},
	illustrator: "Atsuko Nishida",

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [117],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				'ja-jp': "テールスナップ",
			},
			damage: 20,
		},
		{
			cost: ["Water", "Water", "Water"],
			name: {
				'ja-jp': "ノックアウト針",
			},
			effect: {
				'ja-jp': "2つのコインをフリップします。両方がヘッドである場合、この攻撃は30ダメージに加えて60ダメージを与えます。それらの1または両方が尾の場合、この攻撃は30のダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 576826
			},
		},
	],
};

export default card
