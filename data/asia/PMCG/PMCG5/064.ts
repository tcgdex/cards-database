import { Card } from "models/database/card"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マチスのオニドリル",
	},
	illustrator: "Ken Sugimori",

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [22],
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "繰り返しドリル",
			},
			effect: {
				'ja-jp': "5枚のコインをひっくり返します。この攻撃は、ヘッド数の10倍のダメージを与えます。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "クラッチ",
			},
			effect: {
				'ja-jp': "防御するポケモンは、相手の次のターン中に退却することはできません。",
			},
			damage: 30,
		},
	],


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 576802
			},
		},
	],
};

export default card
