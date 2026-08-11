import { Card } from "models/database/card"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "わるいギャロップ",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [78],
	hp: 60,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "リアキック",
			},
			damage: 20,
		},
		{
			cost: ["Fire", "Fire"],
			name: {
				'ja-jp': "炎の柱",
			},
			effect: {
				'ja-jp': "この攻撃を使用すると、Dark Rapidashに取り付けられた1つのFire Energyカードを破棄できます。そうであり、相手がベンチでポケモンを持っている場合は、そのうち1つを選択すると、この攻撃は10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 30,
		},
	],


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575715
			},
		},
	],
};

export default card
