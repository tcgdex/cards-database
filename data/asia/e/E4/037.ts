import { Card } from "models/database/card"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジョルテオン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [135],
	hp: 70,
	types: ["Lightning"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "自己癒し",
			},
			effect: {
				'ja-jp': "手からジョルテオンに稲妻エネルギーカードを取り付けるときはいつでも、ジョルテオンに影響を与えるすべての特別な条件を削除します。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				'ja-jp': "サンダーショック",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
		},
		{
			cost: ["Lightning", "Colorless", "Colorless"],
			name: {
				'ja-jp': "サンダーパーク",
			},
			effect: {
				'ja-jp': "この攻撃は、少なくとも1つのエネルギーカード（あなたと相手）に1つのエネルギーカードが取り付けられた各ベンチポケモンに10ダメージを与えます。",
			},
			damage: 40,
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
