import { Card } from "models/database/card"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "光から光",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [176],
	hp: 60,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'ja-jp': "贈り物",
			},
			effect: {
				'ja-jp': "あなたがあなたの手から光のために光をプレイするとき、あなたの相手はあなたに彼または彼女のデッキを検索し、あなたにそのカードを見せて、それを彼または彼女の手に置くことができます。いずれにせよ、あなたは同じことをするかもしれません、そして、検索した各プレイヤーは彼または彼女のデッキをシャッフルします。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "甘いキス",
			},
			effect: {
				'ja-jp': "対戦相手はカードを描くかもしれません。",
			},
			damage: 30,
		},
	],


	variants: [
		{
			type: "holo",
		},
	],
};

export default card
