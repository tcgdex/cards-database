import { Card } from "models/database/card"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スリープ",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [96],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'ja-jp': "長距離催眠",
			},
			effect: {
				'ja-jp': "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合、防御するポクモンは今眠っています。尾の場合、あなたのアクティブなポクモンは今眠っています。 Drowzeeが特別な状態の影響を受ける場合、電力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				'ja-jp': "悪夢",
			},
			effect: {
				'ja-jp': "防御ポケモンは今眠っています。",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575719
			},
		},
	],
};

export default card
