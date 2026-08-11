import { Card } from "models/database/card"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "暗いクロバット",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [169],
	hp: 90,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ブラックビーム",
			},
			effect: {
				'ja-jp': "ターン中（攻撃の前）に一度、暗いCrobatがあなたのアクティブなPokã©Monである場合、あなたは防御するPokã©Monの1つを選択できます。そのポカモンは現在毒されています。暗いクロバットが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: {
				'ja-jp': "暗い排水",
			},
			effect: {
				'ja-jp': "対戦相手の各ポケモンに10ダメージを与えます。 （ベンチ付きポケモンに衰弱と抵抗を適用しないでください。）ダーククロバットから取り外して、プレイ中の相手のポケモンの数に等しい多くのダメージカウンターを取り外します。",
			},
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				'ja-jp': "スキルダイビング",
			},
			effect: {
				'ja-jp': "対戦相手のポケモンの1つに30ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
