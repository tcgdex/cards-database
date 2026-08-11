import { Card } from "models/database/card"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジョバンニのニドラン♂",
	},
	illustrator: "Ken Sugimori",

	rarity: "Common",
	category: "Pokemon",
	dexId: [32],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ダブルキック",
			},
			effect: {
				'ja-jp': "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
			},
		},
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "報復",
			},
			effect: {
				'ja-jp': "GiovanniのNidoran Mに2つ以上のダメージカウンターがある場合を除き、この攻撃を使用することはできません。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575310
			},
		},
	],
};

export default card
