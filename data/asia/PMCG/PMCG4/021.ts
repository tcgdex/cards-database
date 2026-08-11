import { Card } from "models/database/card"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "わるいカメール",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [8],
	hp: 60,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				'ja-jp': "doubleslap",
			},
			effect: {
				'ja-jp': "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
			},
		},
		{
			cost: ["Water", "Colorless"],
			name: {
				'ja-jp': "ミラーシェル",
			},
			effect: {
				'ja-jp': "攻撃が相手の次のターン中にダークワルトルートにダメージを与えた場合（ダークワルトルがノックアウトされたとしても）、ダークワルトルートルはディフェンディングポケモンに同量のダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575771
			},
		},
	],
};

export default card
