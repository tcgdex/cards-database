import { Card } from "models/database/card"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マタドガス",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [110],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass", "Grass"],
			name: {
				'ja-jp': "スモッグ",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
			},
			damage: 20,
		},
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: {
				'ja-jp': "セルフデストラクト",
			},
			effect: {
				'ja-jp': "各プレイヤーのベンチで各ポケモンに10ダメージを与えます。 （ベンチ付きポケモンに衰弱と抵抗を適用しないでください。）Weezingはそれ自体に60のダメージを与えます。",
			},
			damage: 60,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575711
			},
		},
	],
};

export default card
