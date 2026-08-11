import { Card } from "models/database/card"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Suicune -030/092",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [245],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	abilities: [
		{
			name: {
				'ja-jp': "純粋な体",
			},
			effect: {
				'ja-jp': "手からSuicuneに水エネルギーカードを取り付けるときはいつでも、Suicuneに取り付けられたエネルギーカードを捨ててください。 （Suicuneにエネルギーカードが添付されていない場合、手から水エネルギーカードを取り付けることはできません。）",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				'ja-jp': "催眠波",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は30のダメージを与え、防御ポケモンは眠っています。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
