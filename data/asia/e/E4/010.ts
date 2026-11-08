import { Card } from "models/database/card"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヤンマ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [193],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: {
				'ja-jp': "敏ility性",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、ヤンマに行われた損害を含む攻撃のすべての影響を防ぎます。",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				'ja-jp': "トリプルスマッシュ",
			},
			effect: {
				'ja-jp': "3コインをフリップします。この攻撃は20のダメージに加えて、各ヘッドに対してさらに10ダメージを与えます。",
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
