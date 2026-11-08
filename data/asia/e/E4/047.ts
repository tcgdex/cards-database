import { Card } from "models/database/card"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ウォブバフェット",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [202],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ミラーコート",
			},
			effect: {
				'ja-jp': "Wobbuffetが敵の順番中に防御するPokmonの攻撃によって毒されたり燃やされたりすると、Pokmonは同じ特別な状態の影響を受けます。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				'ja-jp': "攻撃を返す",
			},
			effect: {
				'ja-jp': "2つのコインをフリップします。どちらかがヘッドである場合、この攻撃はWobbuffetのダメージ数の数の10倍のダメージを与えます。",
			},
		},
	],

	retreat: 2,

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
