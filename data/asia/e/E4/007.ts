import { Card } from "models/database/card"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "レディアン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [166],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "花粉シールド",
			},
			effect: {
				'ja-jp': "対戦相手の次のターン中に、Ledianは特別な状態の影響を受けることはできません。 （攻撃、pok？-powers、pok？-bodies、およびトレーナーカードの他の効果はまだ発生しています。）",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: {
				'ja-jp': "迅速",
			},
			effect: {
				'ja-jp': "この攻撃の損傷は、脱力感、抵抗、pok？-Powers、pok？-bodies、または防御ポケモンに対するその他の影響の影響を受けません。",
			},
			damage: 50,
		},
	],


	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
