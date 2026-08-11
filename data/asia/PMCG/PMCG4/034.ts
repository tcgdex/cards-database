import { Card } from "models/database/card"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "わるいユンゲラー",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [64],
	hp: 50,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				'ja-jp': "物質交換",
			},
			type: 'Pokemon Power',
			effect: {
				'ja-jp': "順番<em>（攻撃の前）</em>中に、手からカードを捨てることができます。もしそうなら、カードを描きます。このポケモンが特別な状態の影響を受ける場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Psychic"],
			name: {
				'ja-jp': "マインドショック",
			},
			effect: {
				'ja-jp': "この攻撃の損傷は、脱力感や抵抗の影響を受けません。",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575766
			},
		},
	],
};

export default card
